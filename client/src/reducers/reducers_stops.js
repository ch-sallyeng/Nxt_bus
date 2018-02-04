import axios from 'axios';

export default () => {
  axios.get('/stops', {
    params: {
      busSelection: this.state.busSelection,
      direction: this.state.direction
    }
  })
  .then((res) => {
    this.setState({
      stops: res.data[0],
      stopsIds: res.data[1]
    });
  })
  .catch((error) => {
    console.error('unsuccessful getStops req: ', error);
  });
}
