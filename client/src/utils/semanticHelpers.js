const makeDropdownOptions = (array) => {
  return array.map((elem, i) => {
    return {
      'key': i,
      'text': elem,
      'value': elem,
    }
  })
}

module.exports = {
  makeDropdownOptions,
}
