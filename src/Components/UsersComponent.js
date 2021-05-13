import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import UserComponent from "./UserComponent";
import {getUsers} from "../api/API";



export default function UsersComponent() {

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
                <UserComponent item={item}/>
                )}
            keyExtractor={item=>item.id + ''}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
