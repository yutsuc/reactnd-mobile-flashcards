import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

class Score extends React.Component {
    render = () => {
        const { score, handleRestart, handleBackToDeck } = this.props;
        return (
            <View>
                <Text>{score}</Text>
                <TouchableOpacity onPress={handleRestart}>
                    <Text>Restart</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleBackToDeck}>
                    <Text>Back To Deck</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Score;