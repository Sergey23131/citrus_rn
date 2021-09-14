import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import About from "../About/About";
import Company from "../company/Company";


const Drawer= createDrawerNavigator;

export default function Home() {
    return (
            <Drawer.Navigator initialRouteName="About">
                <Drawer.Screen name="About" component={About} />
                <Drawer.Screen name="Company" component={Company} />
            </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});
