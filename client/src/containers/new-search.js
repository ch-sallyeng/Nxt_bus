import React, { Component } from 'react';
import { connect } from 'react-redux';
import { willMount } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

class NewSearch extends Component {

  componentWillMount = () => {
    this.props.willMount()
  }

  render = () => {
      const { buses } = this.props;
      console.log('buses after returned from reducer: ', buses);
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
            options={buses}
            />
          <Button
            >Get Predictions!</Button>
        </Form>
      </div>
    )
  }
}

// all returned will be passed to container props

function mapStateToProps(state) {
  return {
    buses: state.buses
  };
}

function mapDispatchToProps(dispatch) {
  // passes all actions to reducers
  return bindActionCreators({ willMount: willMount}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSearch);
