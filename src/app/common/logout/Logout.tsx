
import { View } from 'react-native';
import React from 'react';
const Logout = ({ navigation }) => {

    return (
        <View>
            {
                navigation.navigate('Login')
            }
        </View>
    );

}

export default Logout;