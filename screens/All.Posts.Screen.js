import React from 'react';
import {StatusBar} from "expo-status-bar";
import {Button, StyleSheet, Text, View} from 'react-native';


export default function AllPostsScreen({item}) {

    return (
        <View style={[styles.userBox]}>
            <Text>- {item.body}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    userBox: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 10,
        width: '70%',
        height: 100
    }

});