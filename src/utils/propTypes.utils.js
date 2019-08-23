import PropTypes from 'prop-types'

const oneOfOptions = (obj, isRequired = false) => (
  isRequired
    ? PropTypes.oneOf(Object.values(obj)).isRequired
    : PropTypes.oneOf(Object.values(obj))
)
export {
  oneOfOptions,
}
