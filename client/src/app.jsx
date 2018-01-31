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
  }

  setPredictions = (predictions) => {
    console.log('this is predictions inside app.jsx: ', predictions);
    this.setState({
      predictions: predictions
    })
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

    const { predictions } = this.state;

    return (
      <Grid padded='vertically'>
          <Grid.Column style={style.verticalBar} color='grey' width={4} textAlign='right'>
            <VerticalBar />
          </Grid.Column>

          <Grid.Column width={7}>
            <Predictions
              predictions={predictions}
            />
              <Divider />
            <SearchPanes
              setPredictions={this.setPredictions}
            />
          </Grid.Column>
      </Grid>
    )

  }
}

ReactDOM.render(<App />, document.getElementById('app'))
