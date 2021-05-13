import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import UsersComponent from "./src/Components/UsersComponent";
import {createStackNavigator} from "@react-navigation/stack";

let StackNavigator = createStackNavigator()

export default function App() {

    return (
        <View>
            <UsersComponent/>
        </View>
    );
}

const styles = StyleSheet.create({});
