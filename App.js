import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import DeckView from "./components/DeckView";
import AddDeck from "./components/AddDeck";
import Deck from "./components/Deck";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz";

const Tab = createBottomTabNavigator();
const Home = () => {
    return (
        <Tab.Navigator initialRouteName="decks">
            <Tab.Screen name="decks" component={DeckView} options={{
                tabBarLabel: "Decks",
                tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="card-text-outline" color={color} />)
            }} />
            <Tab.Screen name="addDeck" component={AddDeck} options={{
                tabBarLabel: "Add Deck",
                tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="plus-box-outline" color={color} />)
            }} />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

class App extends React.Component {
    render = () => {
        return (
            <View style={{ flex: 1 }}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="home" component={Home} options={{
                            headerShown: false
                        }} />
                        <Stack.Screen name="deck" component={Deck} />
                        <Stack.Screen name="addcard" component={AddCard} />
                        <Stack.Screen name="quiz" component={Quiz} />
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