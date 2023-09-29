import React from "react";
import { StyleSheet, Text, View,StatusBar } from "react-native";
import Constants  from "expo-constants";

import WelcomeSreen from "./app/screens/WelcomeSreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/components/ListingDetailsScreen";
import MessagesScreen from "./app/components/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";

export default function App() {
    return (
      <Screen>
        <Icon 
        name="email"
        size={50}
        backgroundColor='red'
        iconColor="white"
        />
      </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});