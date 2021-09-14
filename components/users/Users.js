import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {getUser} from "../../services/services";
import User from "../user/User";


export default function Users() {
    const [users, setUsers] = useState();

    useEffect(() => {
        getUser().then(value => setUsers([...value]))
    }, [])

    return (
        <View style={[styles.base]}>
            <FlatList

                data={users}
                renderItem={({item}) => <User item={item}/>}
                keyExtractor={item => '' + item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
