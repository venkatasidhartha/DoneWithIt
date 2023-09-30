import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'

const listings = [
    {
        id:1,
        title:'Red Jacket for sale',
        price:100,
        image:require("../assets/jacket.jpg")
    },
    {
        id:2,
        title:'Couch in great condition',
        price:100,
        image:require("../assets/couch.jpg")
    },
    {
        id:3,
        title:'Couch in great condition',
        price:100,
        image:require("../assets/mosh.jpg")
    },
]


const ListingScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList 
      data={listings}
      keyExtractor={listing => listing.id.toString()}
      renderItem={({item}) => 
        <Card title={item.title}
        subTitile={"$"+item.price} 
        image={item.image}/>
    }
      />
    </Screen>
  )
}

export default ListingScreen

const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor:colors.light
    }
})