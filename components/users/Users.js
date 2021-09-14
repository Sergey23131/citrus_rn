import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, View} from 'react-native';
import {getUser} from "../../services/services";
import User from "../user/User";


export default function Users(props) {
    const [users, setUsers] = useState();
    const {navigation}=props;

    useEffect(() => {
        getUser().then(value => setUsers([...value]))
    }, [])

    return (
        <View style={[styles.base]}>
            <FlatList
                data={users}
                renderItem={({item}) => <User item={item} nav={navigation}/>}
                keyExtractor={item => '' + item.id}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    base:{
        flex:1,
    }
});
