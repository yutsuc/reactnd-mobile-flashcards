import React from "react";
import { View, Text, Button } from "react-native";

class Quiz extends React.Component {
    render = () => {
        return (
            <View>
                <Text>Quiz</Text>
                <Button title="Score" onPress={() => this.props.navigation.navigate("score")} />
            </View>
        );
    }
}

export default Quiz;