import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { connect } from "react-redux";
import { removeDeck } from "../actions";
import { removeDeckFromStorage } from "../utils/api";
import { blue, white, red, orange, disabledOrange } from "../utils/color";

class Deck extends React.Component {
    handleDeleteDeck = () => {
        const { navigation, dispatch, title } = this.props;
        dispatch(removeDeck(title));
        removeDeckFromStorage(title);
        navigation.navigate("home");
    }

    render = () => {
        const { title, cardsCount } = this.props;
        this.props.navigation.setOptions({ title });
        return (
            <View style={styles.container}>
                <Text style={styles.deckTitle}>{title}</Text>
                <Text style={styles.cardCount}>{cardsCount} Cards</Text>
                <TouchableOpacity
                    style={[styles.btn, { backgroundColor: blue }]}
                    onPress={() => this.props.navigation.navigate("addCard", { deckName: title })}
                >
                    <Text style={styles.btnText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btn, { backgroundColor: cardsCount === 0 ? disabledOrange : orange }]}
                    onPress={() => this.props.navigation.navigate("quizView", {deckName: title})}
                    disabled={cardsCount === 0}
                >
                    <Text style={styles.btnText}>Start Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btn, { backgroundColor: "transparent", width: "auto" }]}
                    onPress={this.handleDeleteDeck}
                >
                    <Text style={[styles.btnText, { color: red }]}>Delete Deck</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 50,
    },
    deckTitle: {
        fontSize: 50,
        fontWeight: "700",
        paddingBottom: 5,
    },
    cardCount: {
        fontSize: 20,
        color: "gray",
        marginTop: 20,
        marginBottom: 50,
    },
    btn: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        width: Dimensions.get('window').width / 2,
    },
    btnText: {
        fontSize: 22,
        color: white,
        textAlign: "center",
    }
});

const mapStateToProps = (decks, { route }) => {
    const deck = decks[route.params.deckId];
    return {
        title: deck && deck.title,
        cardsCount: deck && deck.questions.length,
    };
}

export default connect(mapStateToProps)(Deck);