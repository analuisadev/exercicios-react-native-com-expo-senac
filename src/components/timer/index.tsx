import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from "react-native";

export default function Timer() {
    const [currentTime, setCurrentTime] = useState<string>('');
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            const seconds = now.getSeconds().toString().padStart(2, "0");

            setCurrentTime(`${hours}:${minutes}:${seconds}`);
        }, 1000)

        return () => clearInterval(intervalId);
    }, []);

    return <View style={styles.container}>
        <Text style={styles.timeText}>{currentTime}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    timeText: {
        fontSize: 24,
        fontWeight: "bold",
    },
});