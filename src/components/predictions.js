import React from 'react'
import { Statistic, Label } from 'semantic-ui-react'

const predictions = [];

const Predictions = () => (
  <div>
      <div><h2>Next Bus coming in...</h2></div>
      <div>
      <br />
        <Statistic.Group widths='four'>
          <Statistic color='orange'>
          <Statistic.Value>9</Statistic.Value>
          <Statistic.Label>Minutes</Statistic.Label>
          </Statistic>

          <Statistic color='orange'>
          <Statistic.Value>13</Statistic.Value>
          <Statistic.Label>Minutes</Statistic.Label>
          </Statistic>

          <Statistic color='orange'>
          <Statistic.Value>18</Statistic.Value>
          <Statistic.Label>Minutes</Statistic.Label>
          </Statistic>

          <Statistic color='orange'>
          <Statistic.Value>22</Statistic.Value>
          <Statistic.Label>Minutes</Statistic.Label>
          </Statistic>

        </Statistic.Group>
      </div>
      <br />
      <div>
        <Label.Group size='small'>
          <Label>38</Label>
          <Label>Inbound</Label>
          <Label>Geary & Divisadero</Label>
        </Label.Group>
      </div>
  </div>
)

export default Predictions




// {predictions.map(prediction => (
//   <Statistic color='orange'>
//     <Statistic.Value>{prediction}</Statistic.Value>
//     <Statistic.Label>Minutes</Statistic.Label>
//   </Statistic>
// ))}
