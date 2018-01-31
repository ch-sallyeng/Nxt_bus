import React from 'react'
import { Input, Form } from 'semantic-ui-react'

const PastSearch = () => (
  <div>
    <div><h1>Past Searches</h1></div>
    <br />
    <Form>
      <Form.Input action='Search' placeholder='Enter name...' />
    </Form>
  </div>
)

export default PastSearch
