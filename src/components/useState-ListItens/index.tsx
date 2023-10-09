import { useState } from "react";
import { Text, TextInput, Button, FlatList, StyleSheet, StatusBar, SafeAreaView } from "react-native";

export default function ListOfItens() {
    const [item, setItem] = useState<string>("");
    const [itemList, setItemList] = useState<Array<string | number>>([]);

    const addItemToList = () => {
        if (item.trim() !== "") {
            setItemList([...itemList, item]);
            setItem("");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <Text style={styles.title}>Lista de Itens</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite um item"
                value={item}
                onChangeText={(text) => setItem(text)}
            />

            <Button title="Adicionar" onPress={addItemToList} />

            <FlatList
                style={styles.listContainer}
                data={itemList}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item}</Text>
                )}
                keyExtractor={(index) => index.toString()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },

    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 8,
        paddingHorizontal: 8,
        width: "100%",
    },

    listContainer: {
        flex: 1,
        width: "100%",
    },
    
    item: {
        fontSize: 16,
        marginBottom: 8,
    },
});
