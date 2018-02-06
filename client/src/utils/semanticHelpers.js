const makeDropdownOptions = (array) => {
  return array.map((elem, i) => {
    return {
      'key': i,
      'text': elem,
      'value': elem,
    }
  })
}

const makeStopsOptions = (stopsData) => {
  return Object.keys(stopsData).map(busStopId => {
    return {
      'key': busStopId,
      'text': stopsData[busStopId],
      'value': busStopId
    }
  })
}

module.exports = {
  makeDropdownOptions,
  makeStopsOptions
}
