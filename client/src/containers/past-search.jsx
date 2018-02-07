import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Input, Form, Label, List, Divider, Icon } from 'semantic-ui-react'

import { setName, getPastSearches, getPredictions } from '../actions/index';

class PastSearch extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.bindActionCreators = bindActionCreators({ setName, getPastSearches, getPredictions }, dispatch);
  }

  onNameInput = (e, { value }) => this.props.dispatch(setName(value));

  onPastSearch = (e) => {
    e.preventDefault();
    const { dispatch, predictionInputs } = this.props;
    dispatch(getPastSearches(predictionInputs))
  }

  onPastSearchSelection = (e, { value }) => {
    console.log('inside onPastSearchSelection: ', value)
    // dispatch(getPredictions(value));
  }

  renderPastSearches = () => {
    const { dispatch, predictionInputs, pastSearches, stopsData } = this.props;
    console.log('INSIDE PASTSEARCH CONTAINER - passed from store: ', pastSearches)
    console.log('INSIDE PASTSEARCH CONTAINER - stopsData: ', stopsData)

    return pastSearches.map(({ busstopid, busselection, busstop, direction }, i) => (
      <List.Item onClick={this.onPastSearchSelection} key={i} value={{ busstopid, busselection, busstop, direction }}>
        <Label color='orange' size='large'>{busselection}</Label>
        <Label color='grey' size='large'>{direction}</Label>
        <Label>@</Label>
        <Label color='black' size='large'>{stopsData[busstopid]}</Label>
      </List.Item>
    ))
  }

  render = () => {
    const { pastSearches } = this.props;

    return (
      <div>
        <div><h1>Past Searches</h1></div>
        <br />
        <Form>
          <Form.Input type='text' placeholder='Search...' action>
          <Form.Input
            onChange={this.onNameInput}
          />
          <Form.Button
            type='submit'
            onClick={this.onPastSearch}
          >Search</Form.Button>
          </Form.Input>
        </Form>

        { pastSearches && pastSearches.length > 0 ? ( <Divider /> ) : null }

        { pastSearches && pastSearches.length ? this.renderPastSearches() : null }

        <List animated relaxed>

        </List>
      </div>
    )
  }
}

const mapStateToProps = ({ predictionInputs, pastSearches, stopsData }) => {
  return { predictionInputs, pastSearches, stopsData };
}

export default connect(mapStateToProps)(PastSearch);

