import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import * as Yup from "yup";

import { AppForm, SubmitButton, AppFormField } from "../components/forms";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />

            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
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

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
});
