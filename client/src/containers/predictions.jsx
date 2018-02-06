import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Statistic, Label } from 'semantic-ui-react'

import {  } from '../actions/index';

class Predictions extends Component {

  renderPredictions = () => {
    const { predictions } = this.props
    return predictions.map((prediction, i) => (
      <Statistic color='orange' size='large' key={i}>
        <Statistic.Value>{prediction}</Statistic.Value>
        <Statistic.Label>Minutes</Statistic.Label>
      </Statistic>
    ))
  }

  render = () => {
    const { predictions } = this.props

    return (
      <div>
        <div>
        </div>

        <br />
        <br />

        <div>
          <Statistic.Group widths='four'>
            { predictions.length > 0 ? this.renderPredictions() : null }
          </Statistic.Group>
        </div>
      </div>
    )
  }
}

// all returned will be passed to container props
const mapStateToProps = ({ predictions }) => {
  return { predictions };
}

export default connect(mapStateToProps)(Predictions);
