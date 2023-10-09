import { SafeAreaView, StatusBar, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export default function Configuration({ navigation }: any) {
    return <SafeAreaView style={styles.container}>
        <StatusBar />
        <Text style={styles.title}>Tela de Configurações</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela Inicial')}>
            <Text style={styles.buttonText}>Ir para tela inicial</Text>
        </TouchableOpacity>
    </SafeAreaView>
}