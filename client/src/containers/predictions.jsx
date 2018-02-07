import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Statistic, Label } from 'semantic-ui-react'

class Predictions extends Component {
  constructor(props) {
    super(props);
  }

  renderPredictions = () => {
    const { predictions } = this.props

    return predictions.slice(0,3).map((prediction, i) => (
      <Statistic color='orange' size='large' key={i}>
        <Statistic.Value>{prediction}</Statistic.Value>
        <Statistic.Label>Minutes</Statistic.Label>
      </Statistic>
    ))
  }

  render = () => {
    const { predictions, predictionInputs, stopsData } = this.props
    const { direction, busSelection, busStop, busStopId } = predictionInputs // see if you can refactor

    return ( <div>

        <div>
        <Label.Group size='medium' color='black'>
          { direction ? ( <h2>Next Bus:</h2> ) : null }
          { busSelection ? ( <Label>{busSelection}</Label> ) : null }
          { direction ? ( <Label>{direction}</Label> ) : null }
          { busStopId ? ( <Label>@</Label> ) : null }
          { busStopId ? ( <Label>{busStop}</Label> ) : null }
        </Label.Group>

        </div>

        <br />
        <br />

        <div>
          <Statistic.Group widths='four'>
            { predictions && predictions.length > 0 ? this.renderPredictions() : null }
          </Statistic.Group>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ predictions, predictionInputs, stopsData }) => {
  return { predictions, predictionInputs, stopsData };
}

export default connect(mapStateToProps)(Predictions);
