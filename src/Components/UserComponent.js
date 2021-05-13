import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';


export default function UserComponent(props) {
    console.log(props)
    const {item} = props
    return (
        <View style={styles.box}>
            <Text>Name : {item.name}</Text>
            <Text>Email : {item.email}</Text>
            <Text>WORKING!!!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        height : 100,
        backgroundColor : 'silver',
        marginBottom : 20
    }
});
