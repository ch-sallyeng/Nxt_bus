import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'

class NewSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      direction: '',
      busNum: '',
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

  getStops() {
    console.log('inside get stops');
  }

  render() {
    const { directions, direction, buses } = this.state
    return (
      <div>
        <div><h1>New Search</h1></div>
        <br />
        <Form>
          <Form.Input
            label='Name'
            placeholder='Name'
            onChange={event => this.setState({ name: event.target.value})}
            />
          <Form.Dropdown
            fluid
            selection
            label='Direction'
            placeholder='Direction'
            options={directions}
            onChange={(e, { value }) => this.setState({ direction: value})}
            />
          <Form.Dropdown
            fluid
            selection
            label='Bus Number'
            placeholder='Bus Number'
            options={buses}
            onChange={(e, { value }) => this.setState({ busNum: value}, this.getStops)}
            />
          <Form.Dropdown
            fluid
            selection
            label='Stop'
            placeholder='Stop'
            />
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
// directions: [
//   {
//     key: 'Inbound',
//     text: 'Inbound',
//     value: 'Inbound',
//   },
//   {
//     key: 'Outbound',
//     text: 'Outbound',
//     value: 'Outbound',
//   }
// ],

