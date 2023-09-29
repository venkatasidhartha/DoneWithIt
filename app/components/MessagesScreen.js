import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ListItem from "./ListItem";
import Screen from "./Screen";
import ListItemSeparator from "./ListItemSeparator";

const messages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/mosh.jpg"),
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/mosh.jpg"),
    },
];

const MessagesScreen = () => {
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={()=>console.log("message selected",item)}
                        renderRightActions={()=><View style={{backgroundColor:"red",width:70}}>sihdu</View>}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
