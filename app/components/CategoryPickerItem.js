import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from './Icon'
import AppText from './AppText'

export default function CategoryPickerItem({item,onPress}) {
  return (
    <View style={styles.container}>
        <Icon backgroundColor={item.backgroundColor} size={80} name={item.icon} />
        <AppText style={styles.label}>{item.label}</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:30,
        paddingVertical:15,
        alignItems:"center",
        width:"33%"
    },
    label:{
        marginTop:5,
        textAlign:"center"
    }
})