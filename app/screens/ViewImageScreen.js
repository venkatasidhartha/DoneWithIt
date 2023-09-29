import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
              <MaterialCommunityIcons name="close" color={colors.white} size={35}/>
            </View>
            <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="trash-can-outline" color={colors.white} size={35}/>
            </View>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/chair.jpg")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    closeIcon: {
        position: "absolute",
        top: 10,
        left: 20,
    },
    deleteIcon: {
        position: "absolute",
        top: 10,
        right: 20,
    },
});

export default ViewImageScreen;
