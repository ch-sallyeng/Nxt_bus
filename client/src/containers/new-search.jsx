import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { makeDropdownOptions, makeStopsOptions } from '../utils/semanticHelpers';

import {
  getBuses,
  setName,
  setDirectionSelection,
  setBusSelection,
  getStops,
  setStopSelection,
  getPredictions
} from '../actions/index';

class NewSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      directions: ['Inbound', 'Outbound'],
    }

    const { dispatch } = props;
    this.bindActionCreators = bindActionCreators({
      getBuses,
      setName,
      setDirectionSelection,
      setBusSelection,
      getStops,
      setStopSelection,
      getPredictions
    }, dispatch);
  }

  onNameInput = (e, { value }) => this.props.dispatch(setName(value));

  onDirectionSelection = (e, { value }) => {
    this.props.dispatch(setDirectionSelection(value));
    this.props.dispatch(getBuses());
  }

  onBusSelection = (e, { value }) => {
    const { dispatch, predictionInputs } = this.props;
    dispatch(setBusSelection(value));
    dispatch(getStops(predictionInputs.direction, value));
  }

  onStopSelection = (e, { value }) => {
    this.props.dispatch(setStopSelection(value))
  }

  onGetPredictionsClick = (e) => {
    e.preventDefault();
    const { dispatch, predictionInputs } = this.props;
    dispatch(getPredictions(predictionInputs))

  }

  render = () => {
      const { directions } = this.state;
      const { dispatch, buses, predictionInputs, stopsData } = this.props;
      const { name, direction, busSelection, busStop, busStopId } = predictionInputs

      return (
      <div>
        <div><h1>New Search</h1></div>
        <br />
        <Form onSubmit={this.onGetPredictionsClick}>
          <Form.Input
            label='Name'
            placeholder='Enter name...'
            onChange={this.onNameInput}
            />
          <Form.Dropdown
            fluid
            selection
            label='Direction'
            placeholder='Select direction...'
            selectOnNavigation={false}
            options={makeDropdownOptions(directions)}
            onChange={this.onDirectionSelection}
            />
          { buses ? ( <Form.Dropdown
            fluid
            selection
            label='Bus'
            placeholder='Select a bus...'
            selectOnNavigation={false}
            options={buses}
            onChange={this.onBusSelection}
            /> ) : ( <Form.Dropdown fluid selection label='Bus' placeholder='Select a bus...'/> ) }
          { stopsData ? ( <Form.Dropdown
              fluid
              selection
              label='Bus Stop'
              placeholder='Select a bus stop...'
              selectOnNavigation={false}
              options={makeStopsOptions(stopsData)}
              onChange={this.onStopSelection}
              /> ) : ( <Form.Dropdown fluid selection label='Bus Stop' placeholder='Select a bus stop...'/> ) }
          <Form.Button type='submit' content='Get Predictions!' />
        </Form>
      </div>
    )
  }
}

// all returned will be passed to container props
const mapStateToProps = ({ buses, predictionInputs, stopsData }) => {
  return { buses, predictionInputs, stopsData };
}

export default connect(mapStateToProps)(NewSearch);

// onClick={this.onGetPredictionsClick}
