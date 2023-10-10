import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker({
    items,
    name,
    PickerItemComponent,
    placeholder,
    width,
    numberOfColumns,
}) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    return (
        <>
            <AppPicker
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                width={width}
                selectedItem={values[name]}
                numberOfColumns={numberOfColumns}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

const styles = StyleSheet.create({});
