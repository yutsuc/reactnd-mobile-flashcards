import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer, } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";
import DeckView from "./components/DeckView";
import AddDeck from "./components/AddDeck";
import Deck from "./components/Deck";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz";
import QuizView from "./components/QuizView";
import Score from "./components/Score";

const Tab = createBottomTabNavigator();
const Home = () => {
    return (
        <Tab.Navigator initialRouteName="decks">
            <Tab.Screen name="decks" component={DeckView} options={{
                tabBarLabel: "Decks",
                tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="card-text-outline" size={30} color={color} />)
            }} />
            <Tab.Screen name="addDeck" component={AddDeck} options={{
                tabBarLabel: "Add Deck",
                tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="plus-box-outline" size={30} color={color} />)
            }} />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

class App extends React.Component {

    render = () => {
        return (
            <View style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
                <NavigationContainer style={styles.container}>
                    <Stack.Navigator>
                        <Stack.Screen name="home" component={Home} options={{
                            headerShown: false,
                            title: "Decks",
                        }} />
                        <Stack.Screen name="deck" component={Deck} />
                        <Stack.Screen name="addCard" component={AddCard} />
                        <Stack.Screen name="quizView" component={QuizView} />
                        <Stack.Screen name="quiz" component={Quiz} />
                        <Stack.Screen name="score" component={Score} />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});


export default App;