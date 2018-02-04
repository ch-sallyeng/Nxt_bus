import ReactDOM from 'react-dom';
import React, { Component } from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import axios from 'axios'

import SearchPanes from './components/search_panes.jsx'

class App extends Component {
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

    const { predictions, direction, busSelection, busStop } = this.state;

    return (
      <Grid padded='vertically'>
          <Grid.Column style={style.verticalBar} color='grey' width={4} textAlign='right'>
            <VerticalBar />
          </Grid.Column>

          <Grid.Column width={8}>
            <SearchPanes />
          </Grid.Column>
      </Grid>
    )

  }
}

ReactDOM.render(<App />, document.getElementById('app'))
