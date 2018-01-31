import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'

class NewSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      direction: '',
      busSelection: '',
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

  makeSemanticOptions(array) {
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
    axios.get('/stops', {
      params: {
        busSelection: this.state.busSelection,
        direction: this.state.direction
      }
    })
    .then((res) => {
      this.setState({
        stops: this.makeSemanticOptions(res.data[0]),
        stopsIds: this.makeSemanticOptions(res.data[1])
      });
    })
    .catch((error) => {
      console.error('unsuccessful getStops req: ', error);
    });
  }

  getPredictions() {
    console.log('inside get predictions')
    axios.get('/predictions', {
      params: {
        name: this.state.name,
        busSelection: this.state.busSelection,
        busStopId: this.state.busStopId,
        busStop: this.state.busStop,
        direction: this.state.direction,
      }
    })
    .then((res) => {
      console.log('successful get request /predictions');
      console.log('RETURNED from getPredictions: ', res.data);

      this.setState({predictions: res.data.slice(0,3)})
    })
    .catch((error) => {
      console.error('unsuccessful getPredictions req: ', error);
    });
  }


  render() {
    const { directions, direction, buses, stops } = this.state
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
            onChange={(e, { value }) => this.setState({ busSelection: value}, this.getStops)}
            />
          <Form.Dropdown
            fluid
            selection
            label='Stop'
            placeholder='Stop'
            options={stops}
            />
          <Button
            type='submit'
            onClick={this.getPredictions}
          >Get Predictions!</Button>
        </Form>
      </div>
    )
  }
}

export default NewSearch;

