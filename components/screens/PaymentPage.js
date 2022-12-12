import { StyleSheet, Text, View, Linking } from "react-native";
import { Surface, List, Portal, Modal, IconButton, TextInput, Button } from 'react-native-paper';

export default function PaymentPage() {

    return (
        <Surface style={styles.surface} elevation={2}>
            <List.Section>

            </List.Section>
            <List.Section>
                Total Payment Due
            </List.Section>
            <List.Section>

            </List.Section>
        </Surface>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    surface: {
        flex: 1,
        margin: 10,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center"
    }
})