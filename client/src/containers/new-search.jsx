import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

import { getBuses, setDirectionSelection, setBusSelection, getStops } from '../actions/index';
import { makeDropdownOptions } from '../utils/semanticHelpers';

class NewSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      directions: ['Inbound', 'Outbound'],
    }

    const { dispatch } = props;
    this.bindActionCreators = bindActionCreators({ getBuses, setDirectionSelection, setBusSelection, getStops }, dispatch);
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

  render = () => {
      const { directions } = this.state;
      const { dispatch, buses, predictionInputs, stopsData } = this.props;

      console.log('stops data: ', stopsData);

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
          <Button type='submit'>
            Get Predictions!
          </Button>
        </Form>
      </div>
    )
  }
}

// all returned will be passed to container props
function mapStateToProps({ buses, predictionInputs, stopsData }) {
  return { buses, predictionInputs, stopsData };
}

// function mapDispatchToProps(dispatch) {
//   // passes all actions to reducers
//   return bindActionCreators({ getBuses, setBusSelection }, dispatch)
// }

export default connect(mapStateToProps)(NewSearch);
