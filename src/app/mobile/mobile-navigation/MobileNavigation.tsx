import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { primaryPurple } from '../../utils/constants.utils';
import tw from 'tailwind-rn';
import { Icon } from 'react-native-elements';
import Profile from '../../common/profile/Profile';
import Courses from '../../common/courses/Courses';
import Settings from '../../common/settings/Settings';
import Logout from '../../common/logout/Logout';
import { View, Text } from 'react-native';
import React from 'react';
import { color } from 'react-native-reanimated';
import { useTheme } from '../../utils/ThemeProvider';
const Tab = createBottomTabNavigator();

const MobileNavigation = () => {

    const { colors } = useTheme();

    return (
        <Tab.Navigator
            sceneContainerStyle={{backgroundColor: colors.background}}
            screenOptions={{
                tabBarLabelPosition: 'below-icon',
                tabBarLabelStyle: { color: primaryPurple }, tabBarInactiveTintColor: 'white', tabBarActiveBackgroundColor: 'lightgrey',
                headerShown: false,

            }}
        >
            <Tab.Screen options={{
                unmountOnBlur: true,
                tabBarIcon: ({ focused, size }) => (
                    <Icon style={tw('mr-1')}
                        type='antdesign'
                        name='profile'
                        size={24}
                        color={primaryPurple}
                    />
                )
            }} name="Profile" component={Profile} />
            <Tab.Screen options={{
                unmountOnBlur: true,
                tabBarIcon: ({ focused, size }) => (
                    <Icon style={tw('mr-1')}
                        type='antdesign'
                        name='book'
                        size={24}
                        color={primaryPurple}
                    />
                )
            }} name="Courses" component={Courses} />
            <Tab.Screen options={{
                unmountOnBlur: true,
                tabBarIcon: ({ focused, size }) => (
                    <Icon style={tw('mr-1')}
                        type='antdesign'
                        name='setting'
                        size={24}
                        color={primaryPurple}
                    />
                )
            }} name="Settings" component={Settings} />
            <Tab.Screen options={{
                unmountOnBlur: true,
                tabBarIcon: ({ focused, size }) => (
                    <Icon style={tw('mr-1')}
                        type='antdesign'
                        name='logout'
                        size={24}
                        color={primaryPurple}
                    />
                )
            }} name="Logout" component={Logout} />
        </Tab.Navigator>
    );
}

export default MobileNavigation;