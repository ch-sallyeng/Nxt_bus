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

      return (
      <div>
        <div><h1>New Search</h1></div>
        <br />
        <Form>
          <Form.Input
            label='Name'
            placeholder='Name'
            onChange={this.onNameInput}
            />
          <Form.Dropdown
            fluid
            selection
            label='Direction'
            placeholder='Direction'
            selectOnNavigation={false}
            options={makeDropdownOptions(directions)}
            onChange={this.onDirectionSelection}
            />
          { buses ? ( <Form.Dropdown
            fluid
            selection
            label='Bus Number'
            placeholder='Bus Number'
            selectOnNavigation={false}
            options={buses}
            onChange={this.onBusSelection}
            /> ) : ( <Form.Dropdown fluid selection label='Bus Number' placeholder='Bus Number'/> ) }
          { stopsData ? ( <Form.Dropdown
              fluid
              selection
              label='Stop'
              placeholder='Stop'
              selectOnNavigation={false}
              options={makeStopsOptions(stopsData)}
              onChange={this.onStopSelection}
              /> ) : ( <Form.Dropdown fluid selection label='Bus Stop' placeholder='Bus Stop'/> ) }
          <Button
            type='submit'
            onClick={this.onGetPredictionsClick}>
            Get Predictions!
          </Button>
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
