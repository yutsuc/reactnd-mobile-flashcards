import React from "react";
import { KeyboardAvoidingView, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard } from "react-native";
import { connect } from "react-redux";
import { blue, white, disabledBlue } from "../utils/color";
import { addDeck } from "../actions";

class AddDeck extends React.Component {
    state = {
        title: "",
    }

    handleTextChange = (input) => {
        this.setState({ title: input });
    }

    handleSubmit = () => {
        Keyboard.dismiss();
        const { dispatch, navigation } = this.props;
        const { title } = this.state;
        dispatch(addDeck(title));
        navigation.replace("home");
        navigation.navigate("deck", { deckId: title });
        this.setState({ title: "" });
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
                <TouchableOpacity style={[styles.submitBtn, { backgroundColor: title === "" ? disabledBlue : blue }]}
                    onPress={this.handleSubmit} disabled={title === ""}
                >
                    <Text style={styles.submitBtnText}>Create Deck</Text>
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
        fontWeight: "700",
        textAlign: "center",
    },
    input: {
        fontSize: 30,
        borderWidth: 0.5,
        margin: 10,
        borderRadius: 4,
        textAlign: "center",
        backgroundColor: white,
        padding: 5,
    },
    submitBtn: {
        padding: 10,
        borderRadius: 10,
        alignSelf: "center",
    },
    submitBtnText: {
        textAlign: "center",
        fontSize: 22,
        color: white,
    }
});

export default connect()(AddDeck);