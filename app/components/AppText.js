import {Text} from 'react-native'
import React from 'react'
import defaultStyles from '../config/styles'

const AppText = ({children,style, ...otherProps}) => {
  return (
      <Text style={[defaultStyles.text,style]} {...otherProps}>{children}</Text>
  )
}

export default AppText
