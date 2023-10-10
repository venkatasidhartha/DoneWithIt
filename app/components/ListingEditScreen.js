import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "./Screen";
import AppFormPicker from "./forms/AppFormPicker";
import CategoryPickerItem from "./CategoryPickerItem";
import AppPicker from "./AppPicker";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Titile"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
});

const categories = [
    { label: "Furniture", value: 1, backgroundColor:'red', icon:'apps' },
    { label: "Clothing", value: 2, backgroundColor:'green', icon:'email' },
    { label: "Camera", value: 3 , backgroundColor:'blue', icon:'lock'},
];

export default function ListingEditScreen() {
    return (
        <Screen>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    maxLength={255}
                    name="title"
                    placeholder={"Title"}
                />
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name={"price"}
                    placeholder={"Price"}
                    width={120}
                />
                <AppPicker
                    items={categories}
                    // PickerItemComponent={CategoryPickerItem}
                    name={"category"}
                    placeholder={"Category"}
                    width={"50%"}
                    // numberOfColumns={3}
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title={"Post"} />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({});
