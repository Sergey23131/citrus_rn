import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default function UserScreen(props) {


    const {route: {params: {data}}, navigation} = props
    return (
        <View style={styles.container}>
            <Text>{data.name} - {data.email }</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});