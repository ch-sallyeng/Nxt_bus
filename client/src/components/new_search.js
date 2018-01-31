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

      directions: this.makeSemanticOptions(['Inbound', 'Outbound']),

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

  makeSemanticOptions (array) {
    return array.map(elem => {
      return {
        'key': elem,
        'text': elem,
        'value': elem,
      }
    })
  }

  getBuses() {
    axios.get('/buses')
      .then(res => {
        this.setState({buses: this.makeSemanticOptions(res.data).sort()})
      })
      .catch(err => {
        console.error('unsuccessful getBuses req: ', error);
      })

  }

  render() {
    const { directions, buses } = this.state
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
          <Form.Dropdown
            fluid
            selection
            label='Bus Number'
            placeholder='Bus Number'
            options={buses} />
          <Form.Dropdown fluid selection label='Stop' placeholder='Stop' />
          <Button type='submit'>Get Predictions!</Button>
        </Form>
      </div>
    )
  }
}

export default NewSearch;

// {predictions.map(prediction => (
//   <Statistic color='orange'>
//     <Statistic.Value>{prediction}</Statistic.Value>
//     <Statistic.Label>Minutes</Statistic.Label>
//   </Statistic>
// ))}

// [
//   {
//     'key': 'Inbound',
//     'text': 'Inbound',
//     'value': 'Inbound',
//   },
//   {
//     'key': 'Outbound',
//     'text': 'Outbound',
//     'value': 'Outbound',
//   }
// ]
