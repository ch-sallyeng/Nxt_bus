import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBuses } from '../actions/index';

import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

class NewSearch extends Component {

  componentWillMount = () => {
    const { getBuses } = this.props;
  }

  render = () => {
      const { buses, onBusSelection } = this.props;

      return (
      <div>
        <div><h1>New Search</h1></div>
        <br />
        <Form onSubmit={() => { this.setState({ })}}>
          <Form.Input
            label='Name'
            placeholder='Name'
            />
          <Form.Dropdown
            fluid
            selection
            label='Bus Number'
            placeholder='Bus Number'
            selectOnNavigation='false'
            options={buses}
            onChange={onBusSelection}
            />
          <Form.Dropdown
            fluid
            selection
            label='Stop'
            placeholder='Stop'
            // options={this.makeSemanticOptions(stops)}
            // onChange={this.onStopSelection}
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
function mapStateToProps({ buses }) {
  return { buses };
}

function mapDispatchToProps(dispatch) {
  // passes all actions to reducers
  return bindActionCreators({ getBuses }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(NewSearch);

