import React from 'react';
import {StyleSheet} from 'react-native';
import Users from "./components/users/Users";
import Home from "./components/home/Home";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import UserScreen from "./screens/User.screen";

let StackNavigator = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator.Navigator initialRouteName="Users">
                <StackNavigator.Screen name={'Users'} component={Users}/>
                <StackNavigator.Screen name={'Home'} component={Home}/>
                <StackNavigator.Screen name={'UserDetails'} component={UserScreen}/>

            </StackNavigator.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
