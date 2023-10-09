import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, View } from "react-native";

type CounterProps = {
    title: string;
}

export default function Counter(props: CounterProps) {
    const [counter, setCounter] = useState<number>(0);

    const handleIncrement = () => setCounter(counter + 1);

    const handleDecrement = () => setCounter(counter - 1);

    const handleReset = () => setCounter(0);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <Text style={styles.title}>{props.title}</Text>

            <Text style={styles.counterText}>{counter}</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleIncrement}>
                    <Text style={styles.buttonText}>Incrementar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleReset}>
                    <Text style={styles.buttonText}>Resetar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleDecrement}>
                    <Text style={styles.buttonText}>Decrementar</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },

    counterText: {
        fontSize: 36,
        fontWeight: "bold",
    },

    buttonContainer: {
        flexDirection: "row",
        marginTop: 20,
    },

    button: {
        backgroundColor: "#007AFF",
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 10,
    },
    
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
});