import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react"
import { Text, View } from "react-native"
import tw from 'tailwind-rn';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

const SplashScreen = (props) => {

    const isVisible = useIsFocused();

    useEffect(() => {
        const timer = setTimeout(() => {
            props.navigation.navigate('Login')
        }, 5000);
        return () => clearTimeout(timer);
    }, [isVisible]);

    return (
        <LinearGradient style={{ flex: 1, justifyContent: 'center' }} colors={['#a88beb', '#f8ceec']}>
            <View style={tw('items-center p-3')}>
                {
                    isVisible &&
                    <Animatable.Text style={tw('text-4xl font-bold text-white')} duration={4000} animation="zoomInUp">Auto Ecole Online</Animatable.Text>
                }
            </View>
        </LinearGradient>
    )
}

export default SplashScreen;