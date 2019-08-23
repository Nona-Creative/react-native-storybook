import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import styles from './StoryIntro.styles'

const StoryIntro = ({ withPadding, children }) =>
  <View style={[styles.container, withPadding && { paddingHorizontal: 30 }]}>
    {children}
  </View>

StoryIntro.propTypes = {
  children: PropTypes.node.isRequired,
  withPadding: PropTypes.bool,
}

StoryIntro.defaultProps = {
  withPadding: false,
}

export default StoryIntro
