import React from 'react';
import {StyleSheet} from 'react-native';
import Users from "./components/users/Users";
import Home from "./components/home/Home";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import UserScreen from "./screens/User.screen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import UsersPageNavigator from "./screens/UsersPageNavigator";

let BottomTabNavigator = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator>
                <BottomTabNavigator.Screen name={'Users'} component={UsersPageNavigator}/>
                <BottomTabNavigator.Screen name={"Home"} component={Home}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
