import React from 'react'
import { Statistic, Label } from 'semantic-ui-react'

const Predictions = ({ predictions, direction, busSelection, busStop }) => (
  <div>
      <div>

      <Label.Group size='medium' color='black'>
          { direction ? ( <h2>Next Bus:</h2> ) : null }
          { busSelection ? ( <Label>{busSelection}</Label> ) : null }
          { direction ? ( <Label>{direction}</Label> ) : null }
          { busStop ? ( <Label>@</Label> ) : null }
          { busStop ? ( <Label>{busStop}</Label> ) : null }
      </Label.Group>

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

export default Predictions


