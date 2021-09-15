import React from 'react';
import {StatusBar} from "expo-status-bar";
import {Button, StyleSheet, Text, View} from 'react-native';


export default function User(props) {
    const {item, nav: {navigate}} = props;

    const onPress = () => {
        navigate('Info', {data: item});
    };

    return (
        <View style={[styles.userBox]}>
            <Text>{item.name}</Text>
            <Button title={'Info'} onPress={onPress}/>

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