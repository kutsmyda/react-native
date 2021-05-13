import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default function UserDetailsComponent ({route, navigation}) {
    console.log(navigation)
    const {params:{user}} = route

    useEffect(()=>{
        navigation.setOptions({title : user.name})

    }, [])


    return (
        <View style={styles.box}>
            <Text>{user.name}</Text>
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