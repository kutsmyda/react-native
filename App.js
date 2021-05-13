import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import UsersComponent from "./src/Components/UsersComponent";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import UserDetailsComponent from "./src/Components/UserDetailsComponent";

let StackNavigator = createStackNavigator()

export default function App() {

    return (

        <NavigationContainer>
            <StackNavigator.Navigator>
                <StackNavigator.Screen name={'Users'} component={UsersComponent}/>
                <StackNavigator.Screen name={'UserDetails'} component={UserDetailsComponent}/>
            </StackNavigator.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
