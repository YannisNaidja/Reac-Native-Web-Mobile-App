import { View, Text } from 'react-native';

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