import { View, Text, ScrollView, TouchableOpacity, Alert, } from "react-native";
import GlobalStyles from "../../Styles/GlobalStyles";
import I18n from '../../util/i18n';
import Styles, { colors } from "./HelpScreen.style";
import React, { useEffect, useRef, useState } from "react";
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import AsyncStorage from "@react-native-async-storage/async-storage";
import InAppReview from 'react-native-in-app-review';
import Icon from "react-native-vector-icons/FontAwesome";

const HelpScreen = () => {

    const [premium, setPremium] = useState(false); // cria uma variavel que indique se é premium ou não
    const bannerRef = useRef<BannerAd>(null);


    // Verifica se o usuario é premium
    useEffect(() => {
        const checkPremium = async () => {
            const premium = await AsyncStorage.getItem('premium');
            if (premium === 'S') {
                setPremium(true);
            }
        }
        checkPremium();
    }, []);

    // Função para solicitar uma avaliação
    const handleReview = () => {
        if (InAppReview.isAvailable()) {
            InAppReview.RequestInAppReview().then((hasFlowFinished) => {
                if (hasFlowFinished) {
                    console.log('Fluxo de revisão no aplicativo concluído com sucesso');
                } else {
                    console.log('Fluxo de revisão no aplicativo não foi concluído');
                    Alert.alert('Aviso', 'A solicitação de revisão não foi concluída.');
                }
            }).catch((error) => {
                console.error('Erro ao solicitar revisão no aplicativo:', error);
                Alert.alert('Erro', 'Ocorreu um erro ao solicitar a revisão.');
            });
        } else {
            console.log('Revisão no aplicativo não está disponível');
            Alert.alert('Aviso', 'A revisão no aplicativo não está disponível no momento.');
        }
    };
    

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }} style={GlobalStyles.body}>
                <Text style={Styles.title}>{I18n.t('about')}</Text>
                <Text style={Styles.text}>{I18n.t('about_text01')}</Text>
                <View style={GlobalStyles.body}>
                    <TouchableOpacity style={Styles.buttonPrimary} onPress={handleReview}>
                        <Icon name={'star-o'} size={28} color={colors.iconColorBotão} />
                        <Text style={Styles.buttonTextPrimary}>{I18n.t("Rate_Our_App")}</Text>
                    </TouchableOpacity>
                </View>
                <Text style={Styles.title}>{I18n.t('help')}</Text>
                <Text style={Styles.subtitle}>{I18n.t('home_screen')}</Text>
                <Text style={Styles.text}>{I18n.t('about_home_screen')}</Text>
                <Text style={Styles.subtitle}>{I18n.t('phrases_screen')}</Text>
                <Text style={Styles.text}>{I18n.t('about_phrases_screen')}</Text>
                <Text style={Styles.subtitle}>{I18n.t('share_screen')}</Text>
                <Text style={Styles.text}>{I18n.t('about_share_screen')}</Text>
            </ScrollView>



            <View style={[Styles.bannerContainer, { position: 'absolute', bottom: 0, width: '100%' }]}>
                {!premium ?
                    <BannerAd
                        ref={bannerRef} // Referência para o BannerAd
                        unitId='ca-app-pub-8667301238982350/7038765928'
                        size={BannerAdSize.BANNER} // Tamanho do banner (BANNER)
                        onAdLoaded={() => {
                            console.log('Ad loaded'); // Evento chamado quando o anúncio é carregado com sucesso
                        }}
                        onAdFailedToLoad={(error) => {
                            console.error('Ad failed to load: ', error); // Evento chamado quando há falha ao carregar o anúncio
                        }}
                    />
                    : null}
            </View>
        </View>
    );
}

export default HelpScreen;