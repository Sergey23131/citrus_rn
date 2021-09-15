import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {getAllPosts, getUser} from "../../services/services";
import User from "../user/User";
import CommentsScreen from "../../screens/Comments.screen";
import AllPostsScreen from "../../screens/All.Posts.Screen";


export default function AllPosts(props) {
    const [posts, setPosts] = useState();

    useEffect(() => {
        getAllPosts().then(value => setPosts([...value]))
    }, [])

    return (
        <View style={[styles.base]}>
            <FlatList
                data={posts}
                renderItem={({item}) => <AllPostsScreen item={item}/>}
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

