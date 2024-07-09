import { View, Text, ScrollView, } from "react-native";
import GlobalStyles from "../../Styles/GlobalStyles";
import I18n from '../../util/i18n';


const HelpScreen = () => {
    return (
        <ScrollView style={GlobalStyles.body}>
            <Text style={GlobalStyles.title}>{I18n.t('about')}</Text>
            <Text style={GlobalStyles.text}>{I18n.t('about_text01')}</Text>
            <Text style={GlobalStyles.title}>{I18n.t('help')}</Text>
            <Text style={GlobalStyles.subtitle}>{I18n.t('home_screen')}</Text>
            <Text style={GlobalStyles.text}>{I18n.t('about_home_screen')}</Text>
            <Text style={GlobalStyles.subtitle}>{I18n.t('phrases_screen')}</Text>
            <Text style={GlobalStyles.text}>{I18n.t('about_phrases_screen')}</Text>
            <Text style={GlobalStyles.subtitle}>{I18n.t('share_screen')}</Text>
            <Text style={GlobalStyles.text}>{I18n.t('about_share_screen')}</Text>
            

        </ScrollView>
    );
}

export default HelpScreen;