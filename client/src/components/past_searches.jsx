import React, { Component } from 'react'
import { Input, Form, Label, List, Divider, Icon } from 'semantic-ui-react'
import axios from 'axios'

class PastSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      pastSearches: [],
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
      console.log(response.data);
      this.setState({pastSearches: response.data})
    })
    .catch((error) => {
      console.error('unsuccessful get request /records', error);
    });
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
        { pastSearches.map((search, i) => (
          <List.Item>
            <Label color='orange' size='large'>{search.busselection}</Label>
            <Label color='grey' size='large'>{search.direction}</Label>
            <Label>@</Label>
            <Label color='black' size='large'>{search.busstop}</Label>
          </List.Item>
        )) }
        </List>
      </div>
    )
  }
}

export default PastSearch

