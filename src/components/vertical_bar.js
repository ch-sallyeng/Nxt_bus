import React from 'react'
import { Header, Image } from 'semantic-ui-react'

const VerticalBar = () => (
  <div>
    <Header as='h1' style={{fontSize: '45px', fontWeight: 1000}} color='orange' textAlign='right'>SF MUNI
      <Header.Subheader style={{fontSize: '23px', fontWeight: 1200}}>
        <b>Next Bus Arrival Times</b>
      </Header.Subheader>
      <Header.Subheader style={{fontSize: '15px', fontWeight: 500, color:'white'}}>
        simple & easy.
      </Header.Subheader>
    </Header>
  </div>
)

export default VerticalBar

