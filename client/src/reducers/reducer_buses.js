import axios from 'axios';

export default () => {
  return axios.get('/buses')
  .then(res => {
    return makeSemanticOptions(res.data.sort())
  })
  .catch(err => {
    console.error('unsuccessful getBuses req: ', error);
  })
}

function makeSemanticOptions(array) {
  return array.map((elem, i) => {
    return {
      'key': i,
      'text': elem,
      'value': elem,
    }
  })
}
