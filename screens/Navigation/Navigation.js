//Navigation.js
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Tabs from './Tabs'

const Navigation = (props) => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={'Tabs'}
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'Tabs'} component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Navigation;
