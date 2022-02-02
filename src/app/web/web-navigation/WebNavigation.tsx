
import tw from 'tailwind-rn';
import { primaryPurple } from '../../utils/constants.utils';
import { Icon } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../../common/profile/Profile';
import Courses from '../../common/courses/Courses';
import Settings from '../../common/settings/Settings';
import Logout from '../../common/logout/Logout';
import React, { useState } from 'react';

const Drawer = createDrawerNavigator();

const WebNavigation = () => {
    return (
        <Drawer.Navigator screenOptions={{
            drawerLabelStyle: { color: primaryPurple }, drawerInactiveTintColor: 'white', drawerActiveBackgroundColor: 'lightgrey',
            headerShown: false, drawerType: 'permanent', drawerStyle: { width: '80' }
        }}>
            <Drawer.Screen options={{
                unmountOnBlur: true,
                drawerIcon: ({ focused, size }) => (
                    <Icon style={tw('mr-1')}
                        type='antdesign'
                        name='profile'
                        size={24}
                        color={primaryPurple}
                    />
                )
            }} name="Profile" component={Profile} />
            <Drawer.Screen  options={{
                unmountOnBlur: true,
                drawerIcon: ({ focused, size }) => (
                    <Icon style={tw('mr-1')}
                        type='antdesign'
                        name='book'
                        size={24}
                        color={primaryPurple}
                    />
                )
            }} name="Courses" component={Courses} />
            <Drawer.Screen  options={{
                unmountOnBlur: true,
                drawerIcon: ({ focused, size }) => (
                    <Icon style={tw('mr-1')}
                        type='antdesign'
                        name='setting'
                        size={24}
                        color={primaryPurple}
                    />
                )
            }} name="Settings" component={Settings} />
            <Drawer.Screen  options={{
                unmountOnBlur: true,
                drawerIcon: ({ focused, size }) => (
                    <Icon style={tw('mr-1')}
                        type='antdesign'
                        name='logout'
                        size={24}
                        color={primaryPurple}
                    />
                )
            }} name="Logout" component={Logout} />
        </Drawer.Navigator>
    )
}

export default WebNavigation;