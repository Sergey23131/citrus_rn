import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {getPosts} from "../../services/services";
import PostScreen from "../../screens/Post.screen";

export default function Home(props) {
    const {route: {params: {data}}} = props

    const [post, setPost] = useState();

    useEffect(() => {
        getPosts(data.id).then(value => setPost(value))
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={post}
                renderItem={({item}) => <PostScreen item={item}/>}
                keyExtractor={item => '' + item.id}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
