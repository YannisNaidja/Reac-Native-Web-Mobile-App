

import { View, Text } from 'react-native';
import tw from 'tailwind-rn';
import { TextInput, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { isMobile } from '../../utils/IsMobile.utils';
import { primaryPurple } from '../../utils/constants.utils';
import { ButtonGroup } from 'react-native-elements'
import globalStyles from '../../utils/style';
import { Icon } from 'react-native-elements';

const RegisterScreen = ({ navigation }) => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <Animatable.View duration={2000} animation="bounceInDown">
            <View style={tw('mt-3 pt-3 items-center')}>
                <Card containerStyle={isMobile() ? tw('w-4/6') : tw('w-1/6')}>
                    <Card.Title style={{ color: primaryPurple }}>Register</Card.Title>
                    <ButtonGroup
                        buttons={['Instructor', 'Student']}
                        selectedIndex={selectedIndex}
                        selectedButtonStyle={{ backgroundColor: primaryPurple }}
                        onPress={(value) => {
                            setSelectedIndex(value);
                        }}
                        containerStyle={{ marginBottom: 20 }}
                    />
                    <View style={globalStyles.inputWithIconContainer}>
                        <Icon style={tw('mr-1')}
                            type='ionicon'
                            name='people'
                            size={24}
                            color={primaryPurple}
                        />
                        <TextInput placeholderTextColor={globalStyles.inputTextPlaceHolderColor.color}
                            style={[globalStyles.inputTextStyle, tw('mt-3'), isMobile() ? tw('mb-1') : [tw('mb-3'), { outlineOffset: '6px', outlineColor: 'white' }]]}
                            placeholder="First Name"></TextInput>
                    </View>
                    <View style={globalStyles.inputWithIconContainer}>
                        <Icon style={tw('mr-1')}
                            type='ionicon'
                            name='people'
                            size={24}
                            color={primaryPurple}
                        />
                        <TextInput placeholderTextColor={globalStyles.inputTextPlaceHolderColor.color}
                            style={[globalStyles.inputTextStyle, tw('mt-3'), isMobile() ? tw('mb-1') : [tw('mb-3'), { outlineOffset: '6px', outlineColor: 'white' }]]}
                            placeholder="Last Name"></TextInput>
                    </View>
                    <View style={globalStyles.inputWithIconContainer}>
                        <Icon style={tw('mr-1')}
                            type='ionicon'
                            name='mail'
                            size={24}
                            color={primaryPurple}
                        />
                       <TextInput placeholderTextColor={globalStyles.inputTextPlaceHolderColor.color}
                            style={[globalStyles.inputTextStyle, tw('mt-3'), isMobile() ? tw('mb-1') : [tw('mb-3'), { outlineOffset: '6px', outlineColor: 'white' }]]}
                            placeholder="Email"></TextInput>
                    </View>
                    <View style={globalStyles.inputWithIconContainer}>
                        <Icon style={tw('mr-1')}
                            type='font-awesome'
                            name='lock'
                            size={24}
                            color={primaryPurple}
                        />
                       <TextInput secureTextEntry={true} placeholderTextColor={globalStyles.inputTextPlaceHolderColor.color}
                            style={[globalStyles.inputTextStyle, tw('mt-3'), isMobile() ? tw('mb-1') : [tw('mb-3'), { outlineOffset: '6px', outlineColor: 'white' }]]}
                            placeholder="Password"></TextInput>
                    </View>

                    <View style={globalStyles.inputWithIconContainer}>
                        <Icon style={tw('mr-1')}
                            type='font-awesome'
                            name='lock'
                            size={24}
                            color={primaryPurple}
                        />
                       <TextInput secureTextEntry={true} placeholderTextColor={globalStyles.inputTextPlaceHolderColor.color}
                            style={[globalStyles.inputTextStyle, tw('mt-3'), isMobile() ? tw('mb-1') : [tw('mb-3'), { outlineOffset: '6px', outlineColor: 'white' }]]}
                            placeholder="Confirm Password"></TextInput>
                    </View>
                    
                    <TouchableOpacity
                        style={[tw('mt-3 rounded-md items-center pt-2 pb-2 pr-10 pl-10 bg-purple-400'), isMobile() ? tw('mb-1') : tw('mb-3')]}
                        onPress={() => { navigation.navigate( isMobile() ? 'MobileNavigation' :'WebNavigation') }}>
                        <Text>Register</Text>
                    </TouchableOpacity>
                </Card>
            </View>
        </Animatable.View>
    )
}

export default RegisterScreen;