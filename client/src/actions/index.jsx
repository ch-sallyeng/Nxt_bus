import axios from 'axios';

export function willMount() {
  return {
    type: 'WILL_MOUNT',
    payload: [
      {
        'key': 0,
        'text': 1,
        'value': 2
      },
      {
        'key': 1,
        'text': 10,
        'value': 4
      }
    ]
  }
}

// export async function willMount() {
//   console.log('inside willMount action');

//   const makeSemanticOptions = (array) => {
//     return array.map((elem, i) => {
//       return {
//         'key': i,
//         'text': elem,
//         'value': elem,
//       }
//     })
//   }

//   // try {
//     let response = await axios.get('/buses');
//     console.log('this is semantic')
//     console.log(makeSemanticOptions(response.data.sort()))
//     return {
//       type: 'WILL_MOUNT',
//       payload: makeSemanticOptions(response.data.sort())
//     }
//   // } catch(err) {
//   //   console.log(err);
//   // }
// }
