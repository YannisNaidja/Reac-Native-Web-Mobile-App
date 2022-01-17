

import { View, Text } from 'react-native';
import tw from 'tailwind-rn';
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { isMobile } from '../utils/IsMobile.utils';
import { useState } from 'react';
import { primaryPurple } from '../utils/constants.utils';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

const users = [{
    username: 'test',
    password: 'test'
}]



const LogingPage = ({ navigation }) => {

    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');
    const [error, setError] = useState(false);

    const handleLogin = (password: string, username: string) => {
        users.forEach(user => {
            if (user.password === password && user.username === username) {
                //navigate
            }
        });
        setError(true);
    }

    return (
        <Animatable.View duration={2000} animation="bounceInDown">
            <View style={tw('mt-3 pt-3 items-center')}>
                <Card containerStyle={isMobile() ? tw('w-4/6') : tw('w-1/6')}>
                    <Card.Title style={{ color: primaryPurple }}>Login</Card.Title>
                    <TextInput onChangeText={onChangeUsername} onFocus={() => { }} style={[tw('mt-3 rounded-md'), isMobile() ? tw('mb-1') : [{ outlineOffset: '6px', outlineColor: primaryPurple }, tw('mb-3')]]} placeholder="Email or Username"></TextInput>
                    <TextInput onChangeText={onChangePassword} style={[tw('mt-3 rounded-md'), isMobile() ? tw('mb-1') : [tw('mb-3'), { outlineOffset: '6px', outlineColor: primaryPurple }]]} placeholder='Password'></TextInput>
                    <TouchableOpacity
                        style={[tw('mt-3 rounded-md items-center pt-2 pb-2 pr-10 pl-10 bg-purple-400'), isMobile() ? tw('mb-1') : tw('mb-3')]}
                        onPress={() => { handleLogin(password, username) }}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    {error ? <Text style={{ color: 'red' }}>Login failed. Please enter a valid username and email.</Text> : null}
                    <Text
                        style={{ color: primaryPurple, textDecorationLine: 'underline' }}
                        onPress={() => navigation.navigate('RegisterScreen')}>
                        New Here ? Register
                    </Text>
                </Card>
            </View>
        </Animatable.View>
    )
}

export default LogingPage;