import React from "react";
import { StyleSheet, Text, View,StatusBar } from "react-native";
import Constants  from "expo-constants";

import WelcomeSreen from "./app/screens/WelcomeSreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/components/ListingDetailsScreen";
import MessagesScreen from "./app/components/MessagesScreen";

export default function App() {
    return (
        <View style={styles.container}>
            <MessagesScreen />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});