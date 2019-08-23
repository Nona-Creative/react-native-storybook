import PropTypes from 'prop-types'

// TODO: Add tests
const oneOfOptions = (obj, isRequired = false) => (
  isRequired
    ? PropTypes.oneOf(Object.values(obj)).isRequired
    : PropTypes.oneOf(Object.values(obj))
)
export {
  oneOfOptions,
}
