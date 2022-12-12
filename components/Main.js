import React from "react";
import { StyleSheet, Button, Text, View, Linking } from "react-native";
import LandingPage from "./screens/LandingPage";


export default function MainApp() {

    return (
        <View style={styles.container}>
            <LandingPage />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})