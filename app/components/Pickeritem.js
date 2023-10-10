import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from './AppText';

const Pickeritem = ({item,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  )
}

export default Pickeritem

const styles = StyleSheet.create({
  text:{
    padding:20
  }
})