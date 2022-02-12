import { View, Text } from 'react-native';
import tw from 'tailwind-rn';
import { TouchableOpacity, StatusBar } from "react-native";
import { isMobile } from '../../utils/IsMobile.utils';
import { primaryPurple } from '../../utils/constants.utils';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import globalStyles from '../../utils/style'
import React from 'react';
import { Icon } from 'react-native-elements';
import { useTheme } from '../../utils/ThemeProvider';
import { Switch } from 'react-native';
const Settings = (props) => {

    const { children } = props;

    const { colors, setScheme, isDark } = useTheme();



    const toggleScheme = () => {
        /*
        * setScheme will change the state of the context
        * thus will cause childrens inside the context provider to re-render
        * with the new color scheme
        */
        isDark ? setScheme('light') : setScheme('dark');
    }

    const containerStyle = {
        /* 
        * the colors.background value will change dynamicly with
        * so if we wanna change its value we can go directly to the pallet
        * this will make super easy to change and maintain mid or end project
        */
        backgroundColor: colors.background,
    };


    return (
        <Animatable.View duration={2000} animation="bounceInLeft">
            <View style={[containerStyle, tw('mt-3 pt-3 items-center')]}>
                <StatusBar animated barStyle={isDark ? "light-content" : "dark-content"} />
                <Card containerStyle={isMobile() ? tw('w-4/6') : tw('w-1/6')}>
                    <Card.Title style={{ color: primaryPurple }}>Settings</Card.Title>
                    <View style={globalStyles.inputWithIconContainer}>
                        <Text
                            style={[tw('mr-1'), isMobile() ? tw('mb-1') : { outlineOffset: '6px', outlineColor: 'white' }]}
                        >Dark Mode</Text>
                        <Icon style={tw('mr-1')}
                            type='entypo'
                            name='moon'
                            size={24}
                            color={primaryPurple}
                        />
                        <Switch value={isDark} onValueChange={toggleScheme} />
                    </View>


                    <TouchableOpacity
                        style={[tw('mt-3 rounded-md items-center pt-2 pb-2 pr-10 pl-10 bg-purple-400'), isMobile() ? tw('mb-1') : tw('mb-3')]}
                        onPress={() => { }}>
                        <Text>Update</Text>
                    </TouchableOpacity>
                </Card>
            </View>
        </Animatable.View>
    )
}

export default Settings;