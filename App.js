import React from "react";
import { View, Keyboard } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer, } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import DeckView from "./components/DeckView";
import AddDeck from "./components/AddDeck";
import Deck from "./components/Deck";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz";
import QuizView from "./components/QuizView";
import Score from "./components/Score";
import { blue } from "./utils/color";


const Tab = createBottomTabNavigator();
const Home = () => {
    return (
        <Tab.Navigator initialRouteName="addDeck" tabBarOptions={{activeTintColor: blue}}>
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
    handleUnhandledTouches = () => {
        Keyboard.dismiss();
        return false;
    }
    
    render = () => {
        return (
            <Provider store={createStore(reducer)}>
                <View style={{ flex: 1, paddingTop: Constants.statusBarHeight }} onStartShouldSetResponder={this.handleUnhandledTouches}>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="home">
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
            </Provider>
        );
    }

}

export default App;