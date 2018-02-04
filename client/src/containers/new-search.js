import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

class NewSearch extends Component {

  makeSemanticOptions = (array) => {
    return array.map((elem, i) => {
      return {
        'key': i,
        'text': elem,
        'value': elem,
      }
    })
  }

  render = () => {
    // const { directions, direction, stops } = this.state
    const { buses } = this.props

    return (
      <div>
        <div><h1>New Search</h1></div>
        <br />
        <Form>
          <Form.Input
            label='Name'
            placeholder='Name'
            onChange={this.onNameChange}
            />
          <Form.Dropdown
            fluid
            selection
            label='Bus Number'
            placeholder='Bus Number'
            options={this.makeSemanticOptions(buses)}
            onChange={this.onBusSelection}
            />
          <Button
            >Get Predictions!</Button>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    buses: state.buses
  };
}

export default connect(mapStateToProps)(NewSearch);
