import { View, Text } from 'react-native';
import tw from 'tailwind-rn';
import { StyleSheet, TextInput, TouchableOpacity, } from "react-native";
import { isMobile } from '../../utils/IsMobile.utils';
import { primaryPurple } from '../../utils/constants.utils';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import globalStyles from '../../utils/style'
import React from 'react';
import { Icon } from 'react-native-elements';
import { useTheme } from '../../utils/ThemeProvider';
const Profile = () => {
    
    const { colors, setScheme, isDark } = useTheme();
    const containerStyle = {
        backgroundColor: colors.background,
        borderRadius: 5,
    };
    const textStyle = {
        color: isDark ? primaryPurple : 'black'
    }
    return (
        <Animatable.View duration={2000} animation="bounceInLeft">
            <View style={[containerStyle,tw('mt-3 pt-3 items-center')]}>
                <Card containerStyle={[containerStyle,isMobile() ? tw('w-4/6') : tw('w-1/6')]}>
                    <Card.Title style={{ color: primaryPurple }}>User Informations</Card.Title>
                    <View style={globalStyles.inputWithIconContainer}>
                        <Icon style={tw('mr-1')}
                            type='font-awesome'
                            name='user'
                            size={24}
                            color={primaryPurple}
                        />
                        <Text
                            style={[textStyle,globalStyles.inputTextStyle, tw('mt-3'), isMobile() ? tw('mb-1') : [tw('mb-3'), { outlineOffset: '6px', outlineColor: 'white' }]]}
                        >Name: User</Text>
                    </View>

                    <View style={globalStyles.inputWithIconContainer}>
                        <Icon style={tw('mr-1')}
                            type='antdesign'
                            name='mail'
                            size={24}
                            color={primaryPurple}
                        />
                        <Text
                            style={[textStyle,globalStyles.inputTextStyle, tw('mt-3'), isMobile() ? tw('mb-1') : [tw('mb-3'), { outlineOffset: '6px', outlineColor: 'white' }]]}
                        >Email: user@mail.com</Text>
                    </View>

                    <View style={globalStyles.inputWithIconContainer}>
                        <Icon style={tw('mr-1')}
                            type='antdesign'
                            name='addusergroup'
                            size={24}
                            color={primaryPurple}
                        />
                        <Text
                            style={[textStyle,globalStyles.inputTextStyle, tw('mt-3'), isMobile() ? tw('mb-1') : [tw('mb-3'), { outlineOffset: '6px', outlineColor: 'white' }]]}
                        >User Type: Student</Text>
                    </View>

                    <View style={globalStyles.inputWithIconContainer}>
                        <Icon style={tw('mr-1')}
                            type='font-awesome'
                            name='lock'
                            size={24}
                            color={primaryPurple}
                        />
                        <Text
                            style={[textStyle,globalStyles.inputTextStyle, tw('mt-3'), isMobile() ? tw('mb-1') : [tw('mb-3'), { outlineOffset: '6px', outlineColor: 'white' }]]}
                        >Password: *****</Text>
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

export default Profile;