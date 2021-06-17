import React from 'react';
import { View } from "react-native"

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
    headerShown: true
};
import { Home, Messages } from '../Pages'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';

function homeTabStack() {
    return (
        <Stack.Navigator
            initialRouteName={"Home"}
            screenOptions={TransitionScreenOptions}>
            <Stack.Screen name={"Home"} component={Home} />
        </Stack.Navigator>
    );
}

function messageTabStack() {
    return (
        <Stack.Navigator
            initialRouteName={"Messages"}
            screenOptions={TransitionScreenOptions}>
            <Stack.Screen name={"Messages"} component={Messages} />
        </Stack.Navigator>
    );
}

const TabNavigator = (props) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let index;
                    if (route.name === 'Home') {
                        index = 0
                    }
                    else if (route.name === 'Messages') {
                        index = 1
                    }
                    return <View key={route.key}
                        style={{ alignItems: 'center' }}>
                        <Icon
                            name={index === 0 ? 'home' : 'message1'}
                            type={'antdesign'}
                            size={24}
                            color={focused ? 'red' : 'gray'}
                        />
                    </View>;
                },
            })}
            tabBarOptions={{
                showLabel: true,
                activeTintColor: 'red',
                inactiveTintColor: 'gray',
                style: { backgroundColor: 'white' },
                labelStyle: {
                    fontSize: wp(3),
                    fontWeight: 'bold',
                    marginBottom: Platform.OS === 'ios' ? wp(1) : 0
                },
            }}
        >
            <Tab.Screen name="Home" component={homeTabStack} />
            <Tab.Screen name="Messages" component={messageTabStack} />
        </Tab.Navigator>
    )
};



export default TabNavigator;