import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    StyleSheet,
    SafeAreaView,
    StatusBar,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

type TaskProps = {
    text: string;
    completed: boolean;
};

export default function ToDoList() {
    const [task, setTask] = useState<string>("");
    const [taskList, setTaskList] = useState<TaskProps[]>([]);

    // Função para adicionar uma nova tarefa à lista
    const addTask = () => {
        if (task.trim() !== "") {
            const newTaskList: TaskProps[] = [...taskList, { text: task, completed: false }];
            setTaskList(newTaskList);
            setTask("");
        }
    };

    // Função para marcar uma tarefa como concluída
    const toggleTask = (index: number) => {
        const updatedTaskList: TaskProps[] = [...taskList];
        updatedTaskList[index].completed = !updatedTaskList[index].completed;
        setTaskList(updatedTaskList);
    };

    // Função para excluir uma tarefa
    const deleteTask = (index: number) => {
        const updatedTaskList: TaskProps[] = [...taskList];
        updatedTaskList.splice(index, 1);
        setTaskList(updatedTaskList);
    };

    // Efeito para persistir a lista de tarefas no armazenamento local sempre que ela for atualizada
    useEffect(() => {
        AsyncStorage.setItem("taskList", JSON.stringify(taskList));
    }, [taskList]);

    // Carregar a lista de tarefas do armazenamento local ao iniciar o aplicativo
    useEffect(() => {
        AsyncStorage.getItem("taskList")
            .then((storedTaskList) => {
                if (storedTaskList !== null) {
                    setTaskList(JSON.parse(storedTaskList));
                }
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <Text style={styles.title}>Lista de Tarefas</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite uma tarefa"
                value={task}
                onChangeText={(text) => setTask(text)}
            />

            <Button title="Adicionar" onPress={addTask} />

            <FlatList
                style={styles.list}
                data={taskList}
                renderItem={({ item, index }) => (
                    <View style={styles.taskItem}>
                        <Text
                            style={[
                                styles.taskText,
                                item.completed ? styles.completedTask : null,
                            ]}
                        >
                            {item.text}
                        </Text>
                        <Button
                            title={item.completed ? "Desfazer" : "Concluir"}
                            onPress={() => toggleTask(index)}
                        />
                        <Button title="Excluir" onPress={() => deleteTask(index)} />
                    </View>
                )}
                keyExtractor={(index) => index.toString()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
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
    },

    list: {
        flex: 1,
        marginTop: 25,
    },

    taskItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8,
    },

    taskText: {
        flex: 1,
        fontSize: 16,
    },

    completedTask: {
        textDecorationLine: "line-through",
        color: "gray",
    },
});
