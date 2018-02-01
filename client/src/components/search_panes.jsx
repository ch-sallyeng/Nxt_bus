import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'

import NewSearch from './new_search.jsx'
import PastSearch from './past_searches.jsx'

class SearchPanes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { setPredictions, setDirectionLabel, setBusLabel, setStopLabel } = this.props;

    const panes = [
      { menuItem: 'New Search', render: () =>
        <Tab.Pane attached={false}>
          <NewSearch
            setPredictions={setPredictions}
            setDirectionLabel={setDirectionLabel}
            setBusLabel={setBusLabel}
            setStopLabel={setStopLabel}
          />
        </Tab.Pane>},
      { menuItem: 'Past Searches', render: () =>
        <Tab.Pane attached={false}>
          <PastSearch />
        </Tab.Pane>}
    ]

    return (
      <div>
        <Tab menu={{ secondary: true, pointing: true }} panes={panes}/>
      </div>
    )
  }
}

export default SearchPanes
