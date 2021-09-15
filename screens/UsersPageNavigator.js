import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Users from "../components/users/Users";
import UserScreen from "./User.screen";
import Home from "../components/home/Home";
import PostScreen from "./Post.screen";


let StackNavigator = createStackNavigator();

export default function UsersPageNavigator(props) {


    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen name={'users'} component={Users}/>
            <StackNavigator.Screen name={'UserDetails'} component={UserScreen}/>
            <StackNavigator.Screen name={'Posts'} component={Home}/>
            <StackNavigator.Screen name={'PostsScreen'} component={PostScreen}/>
        </StackNavigator.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
