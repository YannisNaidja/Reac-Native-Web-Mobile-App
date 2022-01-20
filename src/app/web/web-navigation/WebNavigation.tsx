import { View, Text } from 'react-native';
import tw from 'tailwind-rn';
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from 'react';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { isMobile } from '../../utils/IsMobile.utils';
import { primaryPurple } from '../../utils/constants.utils';
import { ButtonGroup } from 'react-native-elements'
import globalStyles from '../../utils/style';
import { Icon } from 'react-native-elements';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../../common/profile/Profile';
import Courses from '../../common/courses/Courses';

const Drawer = createDrawerNavigator();

const WebNavigation = () => {
    return (
        <Drawer.Navigator screenOptions={{
            drawerLabelStyle: { color: primaryPurple }, drawerInactiveTintColor: 'white', drawerActiveBackgroundColor: 'lightgrey',
            headerShown: false, drawerType: 'permanent', drawerStyle: { width: '80' }
        }}>
            <Drawer.Screen options={{

                drawerIcon: ({ focused, size }) => (
                    <Icon style={tw('mr-1')}
                        type='antdesign'
                        name='profile'
                        size={24}
                        color={primaryPurple}
                    />
                )
            }} name="Profile" component={Profile} />
            <Drawer.Screen options={{
                drawerIcon: ({ focused, size }) => (
                    <Icon style={tw('mr-1')}
                        type='antdesign'
                        name='book'
                        size={24}
                        color={primaryPurple}
                    />
                )
            }} name="Courses" component={Courses} />
        </Drawer.Navigator>
    )
}

export default WebNavigation;