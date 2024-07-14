import { Share, Text, TouchableOpacity, View } from 'react-native';
import I18n from '../../util/i18n';
import GlobalStyles from '../../Styles/GlobalStyles';
import Styles, { colors } from './ShareScreen.style';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";

const ShareScreen = ({ navigation }) => {
    const route = useRoute();
    const phrase = route.params?.phrase;

    const share = () => {
 //       console.log(I18n.t(phrase));

        Share.share({
            message: I18n.t(phrase),
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                err && console.log(err);
            });
    };

    return (
        <View style={[GlobalStyles.container, { backgroundColor: GlobalStyles.body.backgroundColor }]}>
            <Text style={Styles.title}>{I18n.t('share')}</Text>
            <View style={Styles.boxPhrase}>
                <Text style={Styles.subtitle}>{I18n.t(phrase)}</Text>
            </View>
            <View style={GlobalStyles.body}>
                <TouchableOpacity style={Styles.buttonPrimary} onPress={share}>
                    <Icon name={'share-alt-square'} size={40} color={colors.iconColorBotão} />
                    <Text style={Styles.buttonTextPrimary}>{I18n.t('share')}</Text>
                </TouchableOpacity>
            </View>
        </View >

    );
}

export default ShareScreen;