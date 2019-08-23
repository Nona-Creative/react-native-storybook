import { StyleSheet } from 'react-native'

import { colors } from '../../styles'

const ComponentBase = {
  container: {
    padding: 30,
    paddingTop:20,
    borderBottomWidth:1,
    borderBottomColor:colors.lightGray,
    alignSelf: 'stretch',
  },
}

export default StyleSheet.create(ComponentBase)
