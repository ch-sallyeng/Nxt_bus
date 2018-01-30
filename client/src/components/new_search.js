import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'

class NewSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      direction: '',
      busLine: '',
      busStop: '',
      busStopId: '',

      directions: [
        {
          'key': 'Inbound',
          'text': 'Inbound',
          'value': 'Inbound',
        },
        {
          'key': 'Outbound',
          'text': 'Outbound',
          'value': 'Outbound',
        }
      ],

      buses: [],
      stops: [],
      stopsIds: [],

      predictions: [],
      pastSearches: [],
    }
  }

  componentWillMount() {
    this.getBuses();
  }

  getBuses() {
    axios.get('/buses')
      .then(res => {
        console.log('returned from server /buses', res);
      })

  }

  render() {
    const { directions } = this.state
    return (
      <div>
        <div><h1>New Search</h1></div>
        <br />
        <Form>
          <Form.Input
            onChange={event => this.setState({ term: event.target.value})}
            label='Name'
            placeholder='Name' />
          <Form.Dropdown
            fluid
            selection
            label='Direction'
            placeholder='Direction'
            options={directions}
            />
          <Form.Dropdown fluid selection label='Bus Number' placeholder='Bus Number' />
          <Form.Dropdown fluid selection label='Stop' placeholder='Stop' />
          <Button type='submit'>Get Predictions!</Button>
        </Form>
      </div>
    )
  }
}

export default NewSearch;
