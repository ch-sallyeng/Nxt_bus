import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Statistic, Label } from 'semantic-ui-react'

class Predictions extends Component {

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
            { predictions.length > 0 ? predictions.map((prediction, i) => (
              <Statistic color='orange' size='large' key={i}>
                <Statistic.Value>{prediction}</Statistic.Value>
                <Statistic.Label>Minutes</Statistic.Label>
              </Statistic>
            )) : null }
          </Statistic.Group>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    predictions: state.predictions
  };
}


export default connect(mapStateToProps)(Predictions);
