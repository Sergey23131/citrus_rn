import React from 'react';
import {StatusBar} from "expo-status-bar";
import {Button, StyleSheet, Text, View} from 'react-native';


export default function CommentsScreen({item}) {

    return (
        <View style={[styles.userBox]}>
            <Text>- {item.title}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    userBox: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 3,
        width: '70%',
        height: 100
    }

});