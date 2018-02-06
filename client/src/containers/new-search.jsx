import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

import { getBuses, setDirectionSelection, setBusSelection, getStops, setStopSelection } from '../actions/index';
import { makeDropdownOptions, makeStopsOptions } from '../utils/semanticHelpers';

class NewSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      directions: ['Inbound', 'Outbound'],
    }

    const { dispatch } = props;
    this.bindActionCreators = bindActionCreators({ getBuses, setDirectionSelection, setBusSelection, getStops, setStopSelection }, dispatch);
  }

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(getBuses());
  }

  onBusSelection = (e, { value }) => {
    const { dispatch, predictionInputs } = this.props;
    dispatch(setBusSelection(value));
    dispatch(getStops(predictionInputs.direction, value));
  }

  onStopSelection = (e, { value }) => {
    const { dispatch, stopsData } = this.props;
    dispatch(setStopSelection(value));
    // dispatch(getPredictions(predictionInputs.direction, value));
  }

  render = () => {
      const { directions } = this.state;
      const { dispatch, buses, predictionInputs, stopsData } = this.props;

      console.log('returned from: ', predictionInputs);

      return (
      <div>
        <div><h1>New Search</h1></div>
        <br />
        <Form>
          <Form.Input
            label='Name'
            placeholder='Name'
            />
          <Form.Dropdown
            fluid
            selection
            label='Direction'
            placeholder='Direction'
            selectOnNavigation={false}
            options={makeDropdownOptions(directions)}
            onChange={(e, { value }) => { dispatch(setDirectionSelection(value))}}
            />
          <Form.Dropdown
            fluid
            selection
            label='Bus Number'
            placeholder='Bus Number'
            selectOnNavigation={false}
            options={buses}
            onChange={this.onBusSelection}
            />
          { stopsData ? ( <Form.Dropdown
              fluid
              selection
              label='Stop'
              placeholder='Stop'
              selectOnNavigation={false}
              options={makeStopsOptions(stopsData)}
              onChange={this.onStopSelection}
              /> ) : null }
          <Button type='submit'>
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
