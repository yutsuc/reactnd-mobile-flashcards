import React from "react";
import { View, Text, Button } from "react-native";

class Score extends React.Component {
    render = () => {
        return (
            <View>
                <Text>Score</Text>
                <Button title="Restart" onPress={() => this.props.navigation.navigate("quizView")} />
                <Button title="Back To Deck" onPress={() => this.props.navigation.navigate("deck")} />
            </View>
        );
    }
}

export default Score;