import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBuses, setBusSelection } from '../actions/index';

import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

class NewSearch extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.bindActionCreators = bindActionCreators({ getBuses, setBusSelection }, dispatch);
  }

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(getBuses());
  }

  onBusSelection = (e, { value }) => {
    const { dispatch } = this.props;
    dispatch(setBusSelection(value));
  }

  render = () => {
      const { buses, predictionInputs } = this.props;
      console.log('busSelection is: ', predictionInputs)

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
            label='Bus Number'
            placeholder='Bus Number'
            selectOnNavigation={false}
            options={buses}
            onChange={this.onBusSelection}
            />
          <Button
            type='submit'
            >Get Predictions!</Button>
        </Form>
      </div>
    )
  }
}

// all returned will be passed to container props
function mapStateToProps({ buses, predictionInputs }) {
  return { buses, predictionInputs };
}

// function mapDispatchToProps(dispatch) {
//   // passes all actions to reducers
//   return bindActionCreators({ getBuses, setBusSelection }, dispatch)
// }

export default connect(mapStateToProps)(NewSearch);

