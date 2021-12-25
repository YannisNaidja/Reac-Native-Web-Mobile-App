

import { View, Text } from 'react-native';
import tw from 'tailwind-rn';
import { TextInput, TouchableOpacity, Platform } from "react-native";

const LogingPage = () => {
    return (
        <View style={tw('items-center')}>
            <TextInput onFocus={() => {}} style={[tw('mt-3 w-1/6 rounded-md'), Platform.OS === 'android' || Platform.OS == 'ios' ? tw('w-4/6') : tw('w-1/6') ]} placeholder="Email or Username"></TextInput>
            <TextInput style={ [tw('mt-3 rounded-md'), Platform.OS === 'android' || Platform.OS == 'ios' ? tw('w-4/6') : tw('w-1/6') ]} placeholder='Password'></TextInput>
            <TouchableOpacity
                style={ [tw('mt-3 rounded-md items-center pt-2 pb-2 pr-10 pl-10 bg-purple-400'), Platform.OS === 'android' || Platform.OS == 'ios' ? tw('w-4/6') : tw('w-1/6') ]}
                onPress={() => { }}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LogingPage;