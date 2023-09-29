import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";

import AppText from "./AppText";

const Card = ({ title, subTitile, image }) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitile}>{subTitile}</AppText>
            </View>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow:"hidden"
    },
    image: {
        width: "100%",
        height: 200,
    },
    detailsContainer:{
        padding:20
    },
    title:{
        marginBottom:7
    },
    subTitile:{
        color:colors.secondary,
        fontWeight:"bold"
    }
});
