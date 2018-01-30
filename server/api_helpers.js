const axios = require('axios');
const Promise = require('bluebird');

const rootAddress = 'http://localhost:3001/agencies/sf-muni';

const getStops = (req) => {
  const busSelection = req.body.busSelection;
  const dirSelection = req.body.direction;
  // const { busSelection, direction } = req.body;

  return axios.get(`${rootAddress}/routes/${busSelection}`)
    .then(res => {
      console.log('inside STOPS API fetch');
      return res.data;
    })
    .then(parsedResp => {
      const stopsInfo = parsedResp.stops;
      const directions = parsedResp.directions;

      // generate correct stop ids based on direction given
      for (let i = 0; i < directions.length; i++) {
        if (directions[i].shortTitle === dirSelection) {
          const stopIds = directions[i].stops;

          // map correct stop ids to stop names b/c stop ids are required for prediction fetch
          const stopTitles = stopIds.map((stopId) => {
            for (var i = 0; i < stopsInfo.length; i++) {
              if (stopId === stopsInfo[i].id) {
                return stopsInfo[i].title;
              }
            }
          });

          return [stopTitles, stopIds];
        }
      }

    })
    .catch(err => {
      console.log('ERROR inside getStops helper', err);
    });
};

module.exports.getStops = getStops;
