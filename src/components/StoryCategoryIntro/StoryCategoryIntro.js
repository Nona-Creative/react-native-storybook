import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

import styles from './StoryCategoryIntro.styles'
import { StoryCategoryConstants } from '../StoryCategory'
import * as PropTypeUtils from '../../utils/propTypes.utils'

const StoryCategoryIntro = ({ children, category, component }) =>
  <View style={styles.container}>
    <Text style={styles.meta}><Text style={styles.category}>{category}</Text> / <Text style={styles.component}>{component}</Text></Text>
    {children}
  </View>

StoryCategoryIntro.propTypes = {
  children: PropTypes.node.isRequired,
  category: PropTypeUtils.oneOfOptions(StoryCategoryConstants.storyCategoryTypes, true),
  component: PropTypes.string.isRequired,
}

export default StoryCategoryIntro
