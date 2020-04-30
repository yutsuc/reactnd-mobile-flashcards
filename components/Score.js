import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { white, orange, blue, red } from "../utils/color";
import { setLocalNotification, clearLocalNotification } from "../utils/helper";

class Score extends React.Component {
    componentWillUnmount = () => {
        clearLocalNotification().then(setLocalNotification);
    }
    
    render = () => {
        const { score, handleRestart, handleBackToDeck } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.score}>{score} %</Text>
                <TouchableOpacity style={[styles.btn, { backgroundColor: orange }]} onPress={handleRestart}>
                    <Text style={styles.btnText} >Restart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: blue }]} onPress={handleBackToDeck}>
                    <Text style={styles.btnText}>Back To Deck</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    score: {
        fontSize: 100,
        fontWeight: "700",
        marginTop: 20,
        marginBottom: 20,
        color: red,
    },
    btn: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        width: Dimensions.get('window').width / 2,
    },
    btnText: {
        textAlign: "center",
        fontSize: 22,
        color: white,
    }
});

export default Score;