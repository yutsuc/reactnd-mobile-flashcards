import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { red, green, white } from "../utils/color";

class Quiz extends React.Component {
    render = () => {
        const { question, answer } = this.props.question;
        return (
            <View style={styles.container}>
                <Text>{question}</Text>
                <Text>{answer}</Text>
                <TouchableOpacity style={[styles.btn, { backgroundColor: green }]} onPress={() => this.props.handleAnswer(true)}>
                    <Text style={styles.btnText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: red }]} onPress={() => this.props.handleAnswer(false)}>
                    <Text style={styles.btnText}>Incorrect</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    btn: {
        marginTop: 50,
        padding: 10,
        borderRadius: 10,
        width: Dimensions.get('window').width / 2,
    },
    btnText: {
        textAlign: "center",
        fontSize: 22,
        color: white,
    }
});

export default Quiz;