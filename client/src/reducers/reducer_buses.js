import axios from 'axios';

export default () => {
  return axios.get('/buses')
  .then(res => {
    return res.data.sort()
  })
  .catch(err => {
    console.error('unsuccessful getBuses req: ', error);
  })
}
