import { View, Text, ScrollView, Image, TouchableOpacity, Alert, } from "react-native";
import GlobalStyles from "../../Styles/GlobalStyles";
import I18n from '../../util/i18n';
import React, { useEffect, useState } from "react";
import Styles, { colors } from "./PremiumScreen.style";
import Icon from "react-native-vector-icons/FontAwesome";
import { requestPurchase, useIAP } from "react-native-iap";
import AsyncStorage from "@react-native-async-storage/async-storage";





const imgPremium = require('../../assets/images/premium.png');
const imgPremium02 = require('../../assets/images/premium02.png');


//const comprar = () =>
//  console.log('compar');

//const restaurar = () =>
//   console.log('restaurar');


const obrigadoPorSerPremium = async () => {
    try {
        await AsyncStorage.setItem('premium', 'S');
        Alert.alert(
            I18n.t(' thank_you'),
            I18n.t(' thank_you_premium'), [
            { text: 'Ok', onPress: () => { } }
        ],
            { cancelable: true },
        );
    } catch (error) {
        console.log('ERRO obrigadoPorSerPremium');
        console.log(error);

        Alert.alert(
            I18n.t('erro'),
            I18n.t('error_purchase'), [
            { text: 'Ok', onPress: () => { } }])
    }
};


const PremiumScreen = ({ navigation }) => {

    const [price, setPrice] = useState('');

    const {
        connected,
        products,
        promotedProductsIOS,
        subscriptions,
        purchaseHistory,
        availablePurchases,
        currentPurchase,
        currentPurchaseError,
        initConnectionError,
        finishTransaction,
        getProducts,
        getSubscriptions,
        getAvailablePurchases,
        getPurchaseHistory,
    } = useIAP();

    const comprar = async () => {
        try {
            await requestPurchase({ skus: ['premium_version'] })
        } catch (error) {
            console.log('ERRO comprar');
            console.log(error);
        }
    };












    useEffect(() => {
        if (currentPurchaseError != undefined) {
            console.log('ERRO currentPurchaseError');
            console.log(currentPurchaseError?.message);

            Alert.alert(
                I18n.t('erro'),
                I18n.t('error_purchase'), [
                { text: 'Ok', onPress: () => { } },
            ],
                { cancelable: true },
            );
        }
    }, [currentPurchaseError]);


    useEffect(() => {
        console.log('ERRO currentPurchase');
        console.log(currentPurchase);

        const checkCurrentPurchase = async (purchase: any) => {
            if (purchase) {
                const receipt = purchase.transactionReceipt;
                if (receipt)
                    try {
                        const ackResult = await finishTransaction({ purchase, isConsumable: false });
                        console.log('ackResult', ackResult);
                        obrigadoPorSerPremium();
                    } catch (error) {
                        console.log('ERRO checkCurrentPurchase');
                        console.log(error);
                    }
            }
        };
        checkCurrentPurchase(currentPurchase);
    }, [currentPurchase]);


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

                {price != '' ?
                    <View style={Styles.premiumContainer}>
                        <Image style={Styles.ImagePremium} source={imgPremium} />
                        <Text style={Styles.subtitle}>{I18n.t('Only')} {price}</Text>
                    </View>
                    : null}

            </ScrollView >
        </View >


    );
}
export default PremiumScreen;