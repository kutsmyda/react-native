import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import UserComponent from "./UserComponent";
import {getUsers} from "../api/API";



export default function UsersComponent(props) {
    const {navigation} = props
    const [users, setAlUsers] = useState([])
    const fetchUsers = async () => {
        const users = await getUsers()
        setAlUsers([...users])
    }

    useEffect(() => {
        fetchUsers()
    }, [])


    return (
        <View>
            <FlatList
            data={users}
            renderItem={({item})=>(
                <UserComponent nav={navigation} item={item}/>
                )}
            keyExtractor={item=>item.id + ''}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
