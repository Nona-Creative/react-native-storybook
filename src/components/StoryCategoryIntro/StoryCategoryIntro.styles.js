import { StyleSheet } from 'react-native'

import { colors } from '../../styles'

const ComponentBase = {
  container: {
    padding: 30,
    borderBottomWidth:1,
    borderBottomColor:colors.lightGray,
    alignSelf: 'stretch',
  },
  meta: {
    fontSize: 12,
    marginBottom: 5,
  },
  category: {
    textTransform: 'uppercase',
  },
  component: {
    fontWeight: 'bold',
  },
}

export default StyleSheet.create(ComponentBase)
