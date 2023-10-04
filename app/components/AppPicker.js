import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableWithoutFeedback,
    Modal,
    Button,
    FlatList,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Pickeritem from "./Pickeritem";

const AppPicker = ({
    icon,
    items,
    placeholder,
    selectedItem,
    onSelectItem,
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={defaultStyles.colors.medium}
                            style={styles.icon}
                        />
                    )}
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons
                        name={"chevron-down"}
                        size={20}
                        color={defaultStyles.colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Button title="Close" onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.value.toString()}
                    renderItem={({ item }) => (
                        <Pickeritem
                            label={item.label}
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item)
                            }}
                        />
                    )}
                />
            </Modal>
        </>
    );
};

export default AppPicker;

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
    text: {
        flex: 1,
    },
});
