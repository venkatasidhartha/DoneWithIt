import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

import { useFormikContext } from "formik";

const AppFormField = ({ name, width, ...otherProps }) => {
    const {setFieldTouched,handleChange,errors,touched} = useFormikContext();
    // console.log(...otherProps);
    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...otherProps}
                width={width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
};

export default AppFormField;

const styles = StyleSheet.create({});
