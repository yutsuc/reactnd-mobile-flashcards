import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { addCard } from "../actions";
import { white, blue } from "../utils/color";

class AddCard extends React.Component {
    state = {
        question: "",
        answer: "",
    }

    handleTextChange = (input, name) => {
        this.setState({
            [name]: input,
        });
    }

    handleSubmit = () => {
        const { question, answer } = this.state;
        const { dispatch, navigation } = this.props;
        const { deckName } = this.props.route.params;
        dispatch(addCard(deckName, { question, answer }));
        navigation.goBack();
        this.setState({
            question: "",
            answer: "",
        });
    }
    render = () => {
        const { question, answer } = this.state;
        return (
            <View style={{ paddingTop: 50 }}>
                <TextInput
                    ref={this.questionInput}
                    style={styles.input}
                    value={question}
                    onChangeText={(input) => this.handleTextChange(input, "question")}
                    placeholder="Question"
                />
                <TextInput
                    ref={this.answerInput}
                    style={styles.input}
                    value={answer}
                    onChangeText={(input) => this.handleTextChange(input, "answer")}
                    placeholder="Answer"
                />
                <TouchableOpacity style={styles.submitBtn} onPress={this.handleSubmit}>
                    <Text style={styles.submitBtnText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 30,
        borderWidth: 0.5,
        margin: 10,
        borderRadius: 4,
        backgroundColor: white,
        padding: 5,
    },
    submitBtn: {
        marginTop: 50,
        padding: 10,
        borderRadius: 10,
        backgroundColor: blue,
        alignSelf: "center",
    },
    submitBtnText: {
        textAlign: "center",
        fontSize: 22,
        color: white,
    }
});

export default connect()(AddCard);