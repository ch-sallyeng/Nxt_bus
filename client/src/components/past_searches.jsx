import React, { Component } from 'react'
import { Input, Form } from 'semantic-ui-react'

class PastSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  getPastSearches = () => {
    console.log('inside getRecords req');

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
          <input />
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

