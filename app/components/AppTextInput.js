import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, ...otherProps }) => {
    return (
        <View style={styles.container}>
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color={defaultStyles.colors.medium}
                    style={styles.icon}
                />
            )}
            <TextInput {...otherProps} style={defaultStyles.text} />
        </View>
    );
};

export default AppTextInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems: "center",
    },
    icon: {
        marginRight: 10,
    },
});
