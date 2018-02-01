import React, { Component } from 'react'
import { Input, Form, Label, List, Divider, Icon } from 'semantic-ui-react'
import axios from 'axios'

class PastSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      pastSearches: [],
      busStopId: '',
    }
  }

  onPastSearchInput = (e, { value }) => this.setState({ name: value })

  getPastSearches = () => {
    axios.get('/records',{
      params: {
        name: this.state.name,
      }
    })
    .then((response) => {
      this.setState({
        pastSearches: response.data,
        busStopId: response.data.busStopId
      })
    })
    .catch((error) => {
      console.error('unsuccessful get request /records', error);
    });
  }

  onPastSearchSelection = (e, { value }) => {
    let inputs = value.split(',');
    console.log(inputs);
    const { getPredictions } = this.props;
    getPredictions(inputs[0], inputs[1]);
  }

  render = () => {
    const { pastSearches } = this.state;

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

        { pastSearches.length > 0 ? ( <Divider /> ) : null }

        <List animated relaxed>
        { pastSearches.map(({ busstopid, busselection, busstop, direction }, i) => (
          <List.Item onClick={this.onPastSearchSelection} value={`${busselection},${busstopid}`}>
            <Label color='orange' size='large'>{busselection}</Label>
            <Label color='grey' size='large'>{direction}</Label>
            <Label>@</Label>
            <Label color='black' size='large'>{busstop}</Label>
          </List.Item>
        )) }
        </List>
      </div>
    )
  }
}

export default PastSearch



