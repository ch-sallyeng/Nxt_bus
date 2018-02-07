import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'

import NewSearch from '../containers/new-search.jsx'
import PastSearch from '../containers/past-search.jsx'

const SearchPanes = ({ getPredictions, setDirectionLabel, setBusLabel, setStopLabel, updateLabelsOnPastSearch }) => {

  const panes = [
    { menuItem: 'New Search', render: () =>
      <Tab.Pane attached={false}>
        <NewSearch />
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

export default SearchPanes
