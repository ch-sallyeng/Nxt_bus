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

  render = () => {
    const { pastSearches } = this.state;
    const { updateTagsOnPastSearch } = this.props;

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
          <List.Item onClick={updateTagsOnPastSearch} key={i} value={`${busselection},${busstopid},${busstop},${direction}`}>
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


// render the "Next bus coming" for past searches as well as update button tags
// might want to pass up everything you have in line 64's value prop and set states
