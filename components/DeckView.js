import React from "react";
import { View, Text, Button } from "react-native";

class DeckView extends React.Component {
    render = () => {
        return (
            <View>
                <Text>DeckView</Text>
                <Button title="Deck 1" onPress={() => this.props.navigation.navigate("deck")} />
            </View>
        );
    }
}

export default DeckView;