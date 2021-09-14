import React from 'react';
import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from 'react-native';

export default function User({item}) {
    return (
        <View style={[styles.userBox]}>
            <Text>{item.name}</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    userBox: {
        flex: 1,
        backgroundColor: 'silver',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 3,
        width: '70%',
        height: 100
    }

});