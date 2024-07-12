import { View, Text, ScrollView, Image, TouchableOpacity, } from "react-native";
import GlobalStyles from "../../Styles/GlobalStyles";
import I18n from '../../util/i18n';
import React from "react";
import Styles, { colors } from "./PremiumScreen.style";
import Icon from "react-native-vector-icons/FontAwesome";


const imgPremium = require('../../assets/images/premium.png');
const imgPremium02 = require('../../assets/images/premium02.png');


const comprar = () =>
    console.log('compar');

const restaurar = () =>
    console.log('restaurar');

const PremiumScreen = () => {
    return (
        <View style={[GlobalStyles.container, { backgroundColor: GlobalStyles.body.backgroundColor }]}>
            <ScrollView style={GlobalStyles.body}>
                <Text style={Styles.title}>{I18n.t('premium_advantages')}</Text>

                <View style={Styles.premiumContainer}>
                    <Image style={Styles.ImagePremium} source={imgPremium} />
                    <Text style={Styles.subtitle}>{I18n.t('no_ads')}</Text>
                </View>

                <View style={Styles.premiumContainer}>
                    <Image style={Styles.ImagePremium} source={imgPremium} />
                    <Text style={Styles.subtitle}>{I18n.t('just_one_fee')}</Text>
                </View>

                <View style={GlobalStyles.body}>
                    <TouchableOpacity style={Styles.buttonPrimary} onPress={() => comprar()}>
                        <Image source={imgPremium02} style={Styles.ImagePremium} />
                        <Text style={Styles.buttonTextPrimary}>{I18n.t("be_premium")}</Text>
                    </TouchableOpacity>
                </View>

                <View style={GlobalStyles.body}>
                    <TouchableOpacity style={Styles.buttonPrimary} onPress={() => restaurar()}>
                        <Icon name={'check-circle'} size={39} color={colors.iconColorBotão} />
                        <Text style={Styles.buttonTextPrimary}>{I18n.t("restore_purchase")}</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView >
        </View >


    );
}
export default PremiumScreen;