module.exports = getPropertyNames

/**
 * @param {Object} object The object
 * @return {string[]}
 */
function getPropertyNames (object) {
  var names = []

  do {
    Object.getOwnPropertyNames(object).forEach(function (name) {
      if (names.indexOf(name) === -1) {
        names.push(name)
      }
    })

    object = Object.getPrototypeOf(object)
  } while (object !== Object.prototype)

  return names
}
