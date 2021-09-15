import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {getAllPosts, getUser} from "../../services/services";
import User from "../user/User";
import CommentsScreen from "../../screens/Comments.screen";


export default function AllComments(props) {
    const [comments, setComments] = useState();

    useEffect(() => {
        getAllPosts().then(value => setComments([...value]))
    }, [])

    return (
        <View style={[styles.base]}>
            <FlatList
                data={comments}
                renderItem={({item}) => <CommentsScreen item={item}/>}
                keyExtractor={item => '' + item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
    }
});
