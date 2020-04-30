import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import {useNavigation} from "@react-navigation/native";

const DeckCard = (props) =>{
    const {title, count} = props;
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.deckCard} onPress={() => navigation.navigate("deck", { deckId: title })}>
            <Text style={styles.deckTitle}>{title}</Text>
            <Text style={styles.cardCount}>{count} Cards</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
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

export default DeckCard;