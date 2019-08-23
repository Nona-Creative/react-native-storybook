import React from 'react'
import { View, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'

import styles from './StoryContainer.styles'

const StoryContainer = ({ flushHorizontal, children, style }) =>
  <View style={[styles.container, flushHorizontal && { paddingHorizontal: 0 }, style ]}>
    {children}
  </View>

StoryContainer.propTypes = {
  flushHorizontal: PropTypes.bool,
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
}

StoryContainer.defaultProps = {
  flushHorizontal: false,
  style: {},
}

export default StoryContainer
