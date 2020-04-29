import React from "react";
import { KeyboardAvoidingView, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { blue, white } from "../utils/color";
import { addDeck } from "../actions";

class AddDeck extends React.Component {
    state = {
        title: "",
    }

    handleTextChange = (input) => {
        this.setState({ title: input });
    }

    handleSubmit = () => {
        const { dispatch, navigation } = this.props;
        dispatch(addDeck(this.state.title));
        this.setState({ title: "" });
        navigation.navigate("decks");
    }

    render = () => {
        const { title } = this.state;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    placeholder="Deck Title"
                    onChangeText={this.handleTextChange} />
                <TouchableOpacity style={styles.submitBtn} onPress={this.handleSubmit}>
                    <Text style={styles.submitBtnText}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: "space-around",
    },
    title: {
        fontSize: 40,
        fontWeight: "800",
        textAlign: "center",
    },
    input: {
        fontSize: 30,
        borderWidth: 0.5,
        margin: 10,
        borderRadius: 4,
        textAlign: "center",
        backgroundColor: white,
    },
    submitBtn: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: blue,
        justifyContent: "flex-end",
        alignSelf: "center",
    },
    submitBtnText: {
        textAlign: "center",
        fontSize: 22,
        color: white,
    }
});

export default connect()(AddDeck);