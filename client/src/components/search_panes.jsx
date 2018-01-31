import React from 'react'
import { Tab } from 'semantic-ui-react'

import NewSearch from './new_search.jsx'
import PastSearch from './past_searches.jsx'

const panes = [
  { menuItem: 'New Search', render: () => <Tab.Pane attached={false}><NewSearch /></Tab.Pane> },
  { menuItem: 'Past Searches', render: () => <Tab.Pane attached={false}><PastSearch /></Tab.Pane> },
]

const SearchPanes = () => (
  <div>
    <br />
    <br />
    <Tab menu={{ secondary: true, pointing: true }} panes={panes}/>
  </div>
)

export default SearchPanes
