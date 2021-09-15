import React from 'react';
import {StyleSheet} from 'react-native';
import Users from "./components/users/Users";
import Home from "./components/home/Home";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import UserScreen from "./screens/User.screen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import UsersPageNavigator from "./screens/UsersPageNavigator";
import PostScreen from "./screens/Post.screen";
import AllComments from "./components/All_comments/AllComments";
import AllPosts from "./components/All_posts/All_posts";

let BottomTabNavigator = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator>
                <BottomTabNavigator.Screen name={'Users'} component={UsersPageNavigator}/>
                <BottomTabNavigator.Screen name={'All Posts'} component={AllComments}/>
                <BottomTabNavigator.Screen name={'All Comments'} component={AllPosts}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
