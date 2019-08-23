import React from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import styles from './StoryScrollContainer.styles'


const StoryScrollContainer = ({ children }) =>
  <ScrollView style={styles.container}>
    {children}
  </ScrollView>

StoryScrollContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StoryScrollContainer
