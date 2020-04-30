import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { red, green, white } from "../utils/color";

class Quiz extends React.Component {
    state = {
        showAnswer: false,
    }

    toggleAnswer = () => {
        this.setState((prevState) => ({
            showAnswer: !prevState.showAnswer,
        }))
    }

    answerQuestion = (correct) => {
        this.setState({ showAnswer: false });
        this.props.handleAnswer(correct);
    }

    render = () => {
        const { question, answer } = this.props.question;
        const { showAnswer } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.question}>{showAnswer ? answer : question}</Text>
                <TouchableOpacity style={[styles.btn, { backgroundColor: "transparent", width: "auto" }]} onPress={this.toggleAnswer}>
                    <Text style={[styles.btnText, { color: red }]}>{showAnswer ? "Question" : "Answer"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: green }]} onPress={() => this.answerQuestion(true)}>
                    <Text style={styles.btnText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: red }]} onPress={() => this.answerQuestion(false)}>
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
    question: {
        fontSize: 50,
        fontWeight: "700",
    },
    btn: {
        margin: 10,
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