import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';


export default function UserScreen(props) {
    const {route: {params: {data}}, navigation} = props
    const {navigate} = navigation;


    const onPress = () => {
        navigate('Posts', {data});
    };


    return (
        <View style={styles.container}>
            <Text>NAME - {data.name} <br/>
                User name - {data.username} <br/>
                Email - {data.email} <br/>
                Phone number - {data.phone}</Text>
            <Button title={'Posts'} onPress={onPress}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});