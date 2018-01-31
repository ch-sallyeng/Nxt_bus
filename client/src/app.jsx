import ReactDOM from 'react-dom';
import React, { Component } from 'react'
import { Grid, Divider } from 'semantic-ui-react'

import VerticalBar from './components/vertical_bar.jsx'
import Predictions from './components/predictions.jsx'
import SearchPanes from './components/search_panes.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      predictions: []
    }
    this.setPredictions = this.setPredictions.bind(this);
  }

  setPredictions() {

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

          <Grid.Column width={7}>
            <Predictions />
              <Divider />
            <SearchPanes />
          </Grid.Column>
      </Grid>
    )

  }
}

ReactDOM.render(<App />, document.getElementById('app'))
