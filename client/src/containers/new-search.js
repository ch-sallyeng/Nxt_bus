// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Button, Form } from 'semantic-ui-react';
// import axios from 'axios';

// class NewSearch extends Component {

//   render = () => {
//     const { buses } = this.props

//     return (
//       <div>
//         <div><h1>New Search</h1></div>
//         <br />
//         <Form>
//           <Form.Input
//             label='Name'
//             placeholder='Name'
//             />
//           <Form.Dropdown
//             fluid
//             selection
//             label='Bus Number'
//             placeholder='Bus Number'
//             options={buses}

//             />
//           <Button
//             >Get Predictions!</Button>
//         </Form>
//       </div>
//     )
//   }
// }

// function mapStateToProps(state) {
//   return {
//     buses: state.buses
//   };
// }


// export default connect(mapStateToProps)(NewSearch);
