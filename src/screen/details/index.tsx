import { SafeAreaView, StatusBar, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export default function Details({ navigation }: any) {
    return <SafeAreaView style={styles.container}>
        <StatusBar />
        <Text style={styles.title}>Tela de Detalhes</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela de Configurações')}>
            <Text style={styles.buttonText}>Próxima Tela</Text>
        </TouchableOpacity>
    </SafeAreaView>
}