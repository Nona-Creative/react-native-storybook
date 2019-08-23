import React from 'react'
import { View } from 'react-native'

import styles from './DevInfoPane.styles'
import XText, {
  xTextAlignment,
  xTextPresets,
  xTextThemes,
} from '../../src/common/modules/XText'
import { getWindowDimensions } from '../../src/common/styles/responsive.styles.utils'

const DevInfoPane = () => {
  const { width, height } = getWindowDimensions()

  return (
    <View style={styles.container}>
      <XText
        preset={xTextPresets.BODY1}
        theme={xTextThemes.LIGHT}
        align={xTextAlignment.CENTER}
      >
        {width} : {height}
      </XText>
    </View>
  )
}

export default DevInfoPane
