import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";

class DeckView extends React.Component {
    render = () => {
        const { decks, navigation } = this.props;
        return (
            <View style={styles.container}>
                {decks && Object.keys(decks).map(key => (
                    <TouchableOpacity key={key} style={styles.deckCard} onPress={() => navigation.navigate("deck", { deckId: key })}>
                        <Text style={styles.deckTitle}>{key}</Text>
                        <Text style={styles.cardCount}>{decks[key].length} Cards</Text>
                    </TouchableOpacity>
                ))}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    deckCard: {
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        alignItems: "center",
    },
    deckTitle: {
        fontSize: 40,
        fontWeight: "700",
        paddingBottom: 5,
    },
    cardCount: {
        fontSize: 20,
        color: "gray",
    }
})

const mapStateToProps = (decks) => {
    return { decks };
}

export default connect(mapStateToProps)(DeckView);