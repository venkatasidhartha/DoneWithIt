import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from './AppText';

const Pickeritem = ({label,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  )
}

export default Pickeritem

const styles = StyleSheet.create({
  text:{
    padding:20
  }
})