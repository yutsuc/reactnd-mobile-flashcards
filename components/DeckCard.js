import React from "react";
import { Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DeckCard = (props) => {
    const { title, count } = props;
    const navigation = useNavigation();
    const bounceValue = new Animated.Value(1);

    const goToDeck = () => {
        Animated.sequence([
            Animated.timing(bounceValue, { duration: 100, toValue: 2 }),
            Animated.spring(bounceValue, { toValue: 1, friction: 5 })
        ]).start(() => {
            navigation.navigate("deck", { deckId: title });
        });

    }

    return (
        <Animated.View style={{ transform: [{ scale: bounceValue }] }}>
            <TouchableOpacity style={styles.deckCard} onPress={goToDeck}>
                <Text style={[styles.deckTitle]}>{title}</Text>
                <Text style={styles.cardCount}>{count} Cards</Text>
            </TouchableOpacity>
        </Animated.View>
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