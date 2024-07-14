import { ScrollView, Text, View } from 'react-native';
import I18n from '../../util/i18n';
import GlobalStyles from '../../Styles/GlobalStyles';
import Styles from './ShareScreen.style';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const ShareScreen = ({navigation}) => {
    const route = useRoute();
    const phrase = route.params?.phrase;

    return (
        <View style={[GlobalStyles.container, { backgroundColor: GlobalStyles.body.backgroundColor }]}>
            <Text style={Styles.title}>{I18n.t('share')}</Text>
            <View style={Styles.boxPhrase}>
                <Text style={Styles.subtitle}>{I18n.t(phrase)}</Text>
            </View>
        </View >

    );
}

export default ShareScreen;