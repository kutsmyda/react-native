import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Button} from "react-native";


export default function UserComponent(props) {
    const {item, nav} = props

    return (
        <View style={styles.box}>
            <Text>Name : {item.name}</Text>
            <Text>Email : {item.email}</Text>
            <Button title='details' onPress={() => {
                nav.navigate('UserDetails', {user : item})
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        height: 100,
        backgroundColor: 'silver',
        marginBottom: 20
    }
});
