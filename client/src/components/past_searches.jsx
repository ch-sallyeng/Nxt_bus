import React, { Component } from 'react'
import { Input, Form } from 'semantic-ui-react'
import axios from 'axios'

class PastSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    }
  }

  onPastSearchInput = (e, { value }) => this.setState({ name: value })

  getPastSearches = () => {
    console.log('inside getRecords req');
    console.log(this.state.name);
    axios.get('/records',{
      params: {
        name: this.state.name,
      }
    })
    .then((response) => {
      console.log('Returned from getRecords: ', response.data);
      this.setState({pastSearches: response.data})
    })
    .catch((error) => {
      console.error('unsuccessful get request /records', error);
    });
  }

  render = () => {
    return (
      <div>
        <div><h1>Past Searches</h1></div>
        <br />
        <Form>
          <Form.Input type='text' placeholder='Search...' action>
          <Form.Input
            onChange={this.onPastSearchInput}
          />
          <Form.Button
            onClick={this.getPastSearches}
          >Search</Form.Button>
          </Form.Input>
        </Form>
      </div>
    )
  }
}

export default PastSearch

