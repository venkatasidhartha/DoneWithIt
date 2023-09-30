import React from "react";
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ImageComponent,
} from "react-native";
import Constants from "expo-constants";

import WelcomeSreen from "./app/screens/WelcomeSreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/components/ListingDetailsScreen";
import MessagesScreen from "./app/components/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";

export default function App() {
    return (
        <ListingScreen />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
