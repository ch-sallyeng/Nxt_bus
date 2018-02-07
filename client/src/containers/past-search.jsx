import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Input, Form, Label, List, Divider, Icon, Header } from 'semantic-ui-react'

import { setName, getPastSearches, setDirectionSelection, setBusSelection, setStopSelection, getPredictions } from '../actions/index';

class PastSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    }

    const { dispatch } = props;
    this.bindActionCreators = bindActionCreators({ setName, getPastSearches, setDirectionSelection, setBusSelection, setStopSelection, getPredictions }, dispatch);
  }

  onNameInput = (e, { value }) => {
    this.props.dispatch(setName(value));
    this.setState({ name: value });
  }

  onPastSearch = (e) => {
    e.preventDefault();
    const { dispatch, predictionInputs } = this.props;
    dispatch(getPastSearches(predictionInputs));

    // reset dropdown value
    this.setState({ name: '' });
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
    const { predictionInputs, pastSearches } = this.props;

    return (
      <div>
        <div><h1>Past Searches</h1></div>
        <br />
        <Form onSubmit={this.onPastSearch}>
          <Form.Group inline>
            <Form.Input value={this.state.name} placeholder='Enter name...' onChange={this.onNameInput} />
            <Form.Button content='Search' type='submit' />
          </Form.Group>
        </Form>

        { pastSearches && pastSearches.length > 0 ? ( <Divider /> ) : null }

        { pastSearches && pastSearches.length > 0 ? (
          <Header.Subheader style={{fontSize: '16px', fontWeight: 1200}}>
            Welcome back, {predictionInputs.name}!
            <br/>
          </Header.Subheader>
        ) : null }

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
