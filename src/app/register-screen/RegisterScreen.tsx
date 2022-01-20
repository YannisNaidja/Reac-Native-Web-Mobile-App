

import { View, Text } from 'react-native';
import tw from 'tailwind-rn';
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from 'react';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { isMobile } from '../utils/IsMobile.utils';
import { primaryPurple } from '../utils/constants.utils';
import { ButtonGroup } from 'react-native-elements'



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
                        selectedButtonStyle={{backgroundColor: primaryPurple}}
                        onPress={(value) => {
                            setSelectedIndex(value);
                        }}
                        containerStyle={{ marginBottom: 20 }}
                    />
                    <TextInput style={[tw('mt-3 rounded-md'), isMobile() ? tw('mb-1 ') : [{ outlineOffset: '6px', outlineColor: primaryPurple }, tw('mb-3')]]} placeholder="First Name"></TextInput>
                    <TextInput style={[tw('mt-3 rounded-md'), isMobile() ? tw('mb-1 ') : [tw('mb-3'), { outlineOffset: '6px', outlineColor: primaryPurple }]]} placeholder='Last Name'></TextInput>
                    <TextInput style={[tw('mt-3 rounded-md'), isMobile() ? tw('mb-1 ') : [tw('mb-3'), { outlineOffset: '6px', outlineColor: primaryPurple }]]} placeholder='Email'></TextInput>
                    <TextInput secureTextEntry={true} style={[tw('mt-3 rounded-md'), isMobile() ? tw('mb-1 ') : [tw('mb-3'), { outlineOffset: '6px', outlineColor: primaryPurple }]]} placeholder='Password'></TextInput>
                    <TextInput secureTextEntry={true} style={[tw('mt-3 rounded-md'), isMobile() ? tw('mb-1 ') : [tw('mb-3'), { outlineOffset: '6px', outlineColor: primaryPurple }]]} placeholder='Confirm password'></TextInput>
                    <TouchableOpacity
                        style={[tw('mt-3 rounded-md items-center pt-2 pb-2 pr-10 pl-10 bg-purple-400'), isMobile() ? tw('mb-1') : tw('mb-3')]}
                        onPress={() => {  }}>
                        <Text>Register</Text>
                    </TouchableOpacity>
                </Card>
            </View>
        </Animatable.View>
    )
}

export default RegisterScreen;