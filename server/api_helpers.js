const axios = require('axios');
const Promise = require('bluebird');

const nextBusAddress = 'http://localhost:3001/agencies/sf-muni';

const getBuses = (req, res) => {
  console.log('HELPER: inside getBuses');

  return axios.get('http://localhost:3001/agencies/sf-muni/vehicles')
    .then(res => {

      // return only the bus route Ids and delete duplicates
      return res.data.map(bus => {
        return bus.routeId;
      }).filter((routeId, index, self) => {
        return index === self.indexOf(routeId);
      });

    })
    .catch(err => {
      console.log('ERROR inside getBuses helper');
    });
};

module.exports.getBuses = getBuses;
// module.exports.getStops = getStops;
