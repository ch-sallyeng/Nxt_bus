import ReactDOM from 'react-dom';
import React, { Component } from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import axios from 'axios'

import SearchPanes from './search_panes'
import VerticalBar from './vertical_bar'
import Predictions from '../containers/predictions'

export default class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const style = {
      verticalBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '900px'
      }
    }

    return (
      <Grid padded='vertically'>
          <Grid.Column style={style.verticalBar} color='grey' width={4} textAlign='right'>
            <VerticalBar />
          </Grid.Column>

          <Grid.Column width={8}>
            <Predictions />
              <Divider />
          </Grid.Column>
      </Grid>
    )

  }
}


