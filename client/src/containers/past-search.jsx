import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Input, Form, Label, List, Divider, Icon } from 'semantic-ui-react'

import { setName, getPastSearches, setDirectionSelection, setBusSelection, setStopSelection, getPredictions } from '../actions/index';

class PastSearch extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.bindActionCreators = bindActionCreators({ setName, getPastSearches, setDirectionSelection, setBusSelection, setStopSelection, getPredictions }, dispatch);
  }

  onNameInput = (e, { value }) => this.props.dispatch(setName(value));

  onPastSearch = (e) => {
    e.preventDefault();
    const { dispatch, predictionInputs } = this.props;
    dispatch(getPastSearches(predictionInputs))
  }

  onPastSearchSelection = (e, { value }) => {
    const { dispatch } = this.props;
    dispatch(setDirectionSelection(value.direction));
    dispatch(setBusSelection(value.busSelection));
    dispatch(setStopSelection(value));
    dispatch(getPredictions(value));
  }

  renderPastSearches = () => {
    const { dispatch, predictionInputs, pastSearches, stopsData } = this.props;

    return pastSearches.map(({ busStop, busStopId, busSelection, direction }, i) => (
      <List.Item onClick={this.onPastSearchSelection} key={busStopId} value={{ busStop, busStopId, busSelection, direction }}>
        <Label color='orange' size='large'>{busSelection}</Label>
        <Label color='grey' size='large'>{direction}</Label>
        <Label>@</Label>
        <Label color='black' size='large'>{busStop}</Label>
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

        <List animated relaxed>
          { pastSearches && pastSearches.length ? this.renderPastSearches() : null }
        </List>

      </div>
    )
  }
}

const mapStateToProps = ({ predictionInputs, pastSearches, stopsData }) => {
  return { predictionInputs, pastSearches, stopsData };
}

export default connect(mapStateToProps)(PastSearch);

