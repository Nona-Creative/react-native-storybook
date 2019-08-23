import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import styles from './StoryScrollContainerInner.styles'

const StoryScrollContainerInner = ({ children }) =>
  <View style={styles.container}>
    {children}
  </View>

StoryScrollContainerInner.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StoryScrollContainerInner
