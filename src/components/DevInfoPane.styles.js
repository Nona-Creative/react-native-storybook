import { StyleSheet } from 'react-native'

import { colors } from '../../src/common/styles'

const componentStyles = {
  container: {
    backgroundColor: colors.darkGray,
    paddingVertical: 10,
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: '10%',
    zIndex: 10,
  },
}

export default StyleSheet.create(componentStyles)
