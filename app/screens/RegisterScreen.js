import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import * as Yup from "yup";

import { AppForm, SubmitButton, AppFormField } from "../components/forms";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="Name"
                    icon="account"
                    placeholder="Name"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="email"
                    icon="email"
                    keyboardType="email-address"
                    placeholder="Email"
                />
                <AppFormField
                    name="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    secureTextEntry
                    placeholder="Password"
                />
                <SubmitButton title={"Login"} />
            </AppForm>
        </Screen>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});
