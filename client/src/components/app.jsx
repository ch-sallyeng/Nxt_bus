import ReactDOM from 'react-dom';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid, Divider } from 'semantic-ui-react'
import axios from 'axios'

import SearchPanes from './search_panes'
import VerticalBar from './vertical_bar'
import Predictions from '../containers/predictions'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { predictions } = this.props

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
            { predictions && predictions.length > 0 ? ( <Divider /> ) : null }
            <SearchPanes />
          </Grid.Column>
      </Grid>
    )

  }
}

const mapStateToProps = ({ predictions }) => {
  return { predictions };
}

export default connect(mapStateToProps)(App);
