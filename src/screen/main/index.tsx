import { SafeAreaView, StatusBar, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export default function Main({ navigation }: any) {
    return <SafeAreaView style={styles.container}>
        <StatusBar />
        <Text style={styles.title}>Tela inicial</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela de Detalhes')}>
            <Text style={styles.buttonText}>Próxima Tela</Text>
        </TouchableOpacity>
    </SafeAreaView>
}