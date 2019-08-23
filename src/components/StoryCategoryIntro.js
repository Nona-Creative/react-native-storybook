import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

import styles from './StoryCategoryIntro.styles'

const storyCategoryTypes = {
  ELEMENT: 'Elements',
  FUNDAMENTAL: 'Fundamentals',
  STACK: 'Stacks',
  VIEW: 'Views',
}

const StoryCategoryIntro = ({ children, category, component }) =>
  <View style={styles.container}>
    <Text style={styles.meta}><Text style={styles.category}>{category}</Text> / <Text style={styles.component}>{component}</Text></Text>
    {children}
  </View>

StoryCategoryIntro.propTypes = {
  children: PropTypes.node.isRequired,
  category: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
}

export default StoryCategoryIntro

export {
  storyCategoryTypes,
}
