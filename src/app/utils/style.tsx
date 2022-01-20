import { StyleSheet } from 'react-native';
import { isMobile } from './IsMobile.utils';

export default StyleSheet.create({
    inputTextStyle: {
        borderBottomColor: 'darkgrey',
        borderRadius: 1,
        borderBottomWidth: 1,
        flex: 1,
        flexWrap: 'wrap'
        
    },
    inputTextPlaceHolderColor: {
        color: 'darkgrey'
    },
    inputWithIconContainer: {
        flexDirection: 'row',
        alignItems: isMobile() ? 'baseline' : 'center',
    }
});
