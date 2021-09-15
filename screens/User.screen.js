import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';


export default function UserScreen(props) {
    const {route: {params: {data}}, navigation} = props
    const {navigate} = navigation;


    const onPress = () => {
        navigate('Posts', {data});
    };

    console.log(data)

    return (
        <View style={styles.container}>
            <Text>{data.name} - {data.title}</Text>
            <Button title={'user datalist'} onPress={onPress}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});