import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ImageComponent,
    TextInput,
    Switch,
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
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import AppText from "./app/components/AppText";

const categories = [
    { label: "Funiture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
];

export default function App() {
    const [category, setCategory] = useState(categories[0]);
    console.log(category);
    return (
        <Screen>
            <AppPicker
                selectedItem={category}
                onSelectItem={item=>setCategory(item)}
                items={categories}
                icon={"apps"}
                placeholder={"Category"}
            />
            <AppTextInput icon={"email"} placeholder="Email" />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
