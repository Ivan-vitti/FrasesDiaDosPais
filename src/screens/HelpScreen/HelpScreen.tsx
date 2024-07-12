import { View, Text, ScrollView, } from "react-native";
import GlobalStyles from "../../Styles/GlobalStyles";
import I18n from '../../util/i18n';
import Styles from "./HelpScreen.style";
import React from "react";


const HelpScreen = () => {
    return (
        <ScrollView style={GlobalStyles.body}>
            <Text style={Styles.title}>{I18n.t('about')}</Text>
            <Text style={Styles.text}>{I18n.t('about_text01')}</Text>
            <Text style={Styles.title}>{I18n.t('help')}</Text>
            <Text style={Styles.subtitle}>{I18n.t('home_screen')}</Text>
            <Text style={Styles.text}>{I18n.t('about_home_screen')}</Text>
            <Text style={Styles.subtitle}>{I18n.t('phrases_screen')}</Text>
            <Text style={Styles.text}>{I18n.t('about_phrases_screen')}</Text>
            <Text style={Styles.subtitle}>{I18n.t('share_screen')}</Text>
            <Text style={Styles.text}>{I18n.t('about_share_screen')}</Text>
            

        </ScrollView>
    );
}

export default HelpScreen;