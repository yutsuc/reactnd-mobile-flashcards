import React from "react";
import { View, Text, Button } from "react-native";

class Deck extends React.Component {
    render = () => {
        return (
            <View>
                <Text>Deck</Text>
                <Button title="Add Card" onPress={() => this.props.navigation.navigate("addCard")} />
                <Button title="Start Quiz" onPress={() => this.props.navigation.navigate("quizView")} />
            </View>
        );
    }
}

export default Deck;