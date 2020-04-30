import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Quiz from "./Quiz";
import Score from "./Score";

class QuizView extends React.Component {
    state = {
        currentQuestionIndex: 0,
        correctCount: 0,
        showScore: false,
    }

    handleAnswer = (correct) => {
        if (correct) {
            this.setState((prevState) => ({
                correctCount: prevState.correctCount + 1,
            }));
        }
        this.setState((prevState) => ({
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            showScore: prevState.currentQuestionIndex + 1 === this.props.questions.length,
        }));
    }

    handleRestart = () => {
        this.setState({
            currentQuestionIndex: 0,
            correctCount: 0,
            showScore: false,
        });
    }

    render = () => {
        const { title, questions, navigation } = this.props;
        const { currentQuestionIndex, correctCount, showScore } = this.state;
        const score = ((correctCount / questions.length) * 100).toFixed(2);
        return (
            <View style={styles.container}>
                {!showScore && <Text style={styles.progress}>{currentQuestionIndex + 1} / {questions.length}</Text>}
                {!showScore && <Quiz question={questions[currentQuestionIndex]} handleAnswer={this.handleAnswer} />}
                {showScore && <Score score={score} handleRestart={this.handleRestart} handleBackToDeck={() => navigation.navigate("deck", { deckId: title })} />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    progress: {
        fontSize: 20,
        marginBottom: 10,
    },
});

const mapStateToProps = (decks, { route }) => {
    const deck = decks[route.params.deckName];
    return {
        title: deck && deck.title,
        questions: deck && deck.questions,
    }
}

export default connect(mapStateToProps)(QuizView);