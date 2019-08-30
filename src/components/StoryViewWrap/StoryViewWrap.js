import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import styles from './StoryViewWrap.styles'
import StaticHeader from '../../src/common/modules/StaticHeader'

const StoryViewWrap = ({ showNavHeader, children }) => (
  <View style={styles.container}>
    { showNavHeader ? <StaticHeader title='Mock Header' /> : null }
    <View style={{ flex: 1 }}>
      {children}
    </View>
  </View>
)

StoryViewWrap.propTypes = {
  children: PropTypes.node.isRequired,
  showNavHeader: PropTypes.bool,
}

StoryViewWrap.defaultProps = {
  showNavHeader: false,
}

export default StoryViewWrap
