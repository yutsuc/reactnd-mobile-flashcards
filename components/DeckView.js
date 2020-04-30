import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import DeckCard from "./DeckCard";
import { red } from "../utils/color";
import { getDecks } from "../utils/api";
import { receiveDecks } from  "../actions";

class DeckView extends React.Component {
    componentDidMount = () => {
        getDecks().then(decks => this.props.dispatch(receiveDecks(decks)));
    }

    render = () => {
        const { decks, deckTitles } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    ListEmptyComponent={
                        <View style={{ alignItems: "center" }}>
                            <Ionicons name="ios-warning" size={50} color={red} />
                            <Text style={styles.noDecksText}>No flashcards</Text>
                        </View>
                    }
                    data={deckTitles}
                    keyExtractor={item => item}
                    renderItem={({ item }) => <DeckCard title={item} count={decks[item].questions.length} />} />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    noDecksText: {
        fontSize: 30,
        fontWeight: "600",
        color: red,
    },
})

const mapStateToProps = (decks) => {
    return {
        decks,
        deckTitles: decks && Object.keys(decks).sort(),
    };
}

export default connect(mapStateToProps)(DeckView);