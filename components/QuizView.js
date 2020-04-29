import React from "react";
import { View, Text, Button } from "react-native";

class QuizView extends React.Component {
    render = () => {
        return (
            <View>
                <Text>QuizView</Text>
                <Button title="Q1" onPress={() => this.props.navigation.navigate("quiz")} />
            </View>
        );
    }
}

export default QuizView;