

import { View, Text } from 'react-native';
import tw from 'tailwind-rn';
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { isMobile } from '../utils/IsMobile.utils';
import { useState } from 'react';
import { primaryPurple } from '../utils/constants.utils';

const users = [{
    username: 'test',
    password: 'test'
}]

const handleLogin = (password: string, username: string) => {

    users.forEach(user => {
        if (user.password === password && user.username === username) {
            // navigate 
        }
    });

}


const LogingPage = () => {
    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');
    const [error, setError] = useState(false);
    return (
        <View style={tw('mt-3 pt-3 items-center')}>
            <TextInput onChangeText={onChangeUsername} onFocus={() => { }} style={[{ outlineOffset: '6px', outlineColor: primaryPurple }, tw('mt-3 w-1/6 rounded-md'), isMobile() ? tw('w-4/6') : tw('w-1/6')]} placeholder="Email or Username"></TextInput>
            <TextInput onChangeText={onChangePassword} style={[{ outlineOffset: '6px', outlineColor: primaryPurple }, tw('mt-3 rounded-md'), isMobile() ? tw('w-4/6') : tw('w-1/6')]} placeholder='Password'></TextInput>
            <TouchableOpacity
                style={[tw('mt-3 rounded-md items-center pt-2 pb-2 pr-10 pl-10 bg-purple-400'), isMobile() ? tw('w-4/6') : tw('w-1/6')]}
                onPress={() => { handleLogin(password, username) }}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LogingPage;