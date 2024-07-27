import { Button, Text, TouchableOpacity, View } from 'react-native';

import I18n from '../../util/i18n';
import GlobalStyles from '../../Styles/GlobalStyles';
import Styles, { colors } from './ShareScreen.style';
import React, { useEffect, useRef, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";
import Share from 'react-native-share';
import { AdEventType, BannerAd, BannerAdSize, InterstitialAd, TestIds } from 'react-native-google-mobile-ads';
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomizationScreen from '../CustomizationModal';


const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-8667301238982350/4109936984');


const ShareScreen = ({ navigation }) => {

    const [premium, setPremium] = useState(false); // cria uma variavel que indique se é premium ou não
    const bannerRef = useRef<BannerAd>(null);
    const route = useRoute();
    const phrase = route.params?.phrase;
    const [loaded, setLoaded] = useState(false);
    const [isCustomizationVisible, setIsCustomizationVisible] = useState(false);

    useEffect(() => {

        // Verifica se o usuario é premium
        const checkPremium = async () => {
            const premium = await AsyncStorage.getItem('premium');
            if (premium === 'S') {
                setPremium(true);
            }
        }
        checkPremium();

        const onAdLoaded = () => {
            setLoaded(true);
            console.log('Interstitial ad loaded So Vaiiiiiii');
        };

        const onAdFailedToLoad = (error: any) => {
            console.error('Interstitial ad failed to load DEU RUImmmmmm: ', error);
        };

        const onAdClosed = () => {
            shareFinish();
        };

        const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, onAdLoaded);
        const unsubscribeFailed = interstitial.addAdEventListener(AdEventType.ERROR, onAdFailedToLoad);
        const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, onAdClosed);

        // Inicia o carregamento do intersticial
        interstitial.load();

        // Desinscreve os ouvintes ao desmontar o componente
        return () => {
            unsubscribeLoaded();
            unsubscribeFailed();
            unsubscribeClosed();
        };
    }, []);

    const share = () => {
        if (loaded && !premium) {
            interstitial.show();
        } else {
            shareFinish();
        }
    };

    const shareFinish = () => {
        console.log(I18n.t(phrase));

        Share.open({   // Utilizando o método correto para abrir o menu de compartilhamento
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
        <View style={{ flex: 1 }}>
            
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

                <View style={GlobalStyles.body}>
                    <TouchableOpacity style={Styles.buttonPrimary} onPress={() => setIsCustomizationVisible(true)}>
                        <Icon name={'edit'} size={40} color={colors.iconColorBotão} />
                        <Text style={Styles.buttonTextPrimary}>{I18n.t('personalize')}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                {!premium ?
                    <BannerAd
                        ref={bannerRef}
                        //    unitId={__DEV__ ? TestIds.BANNER : 'ca-app-pub-8667301238982350/7038765928'} para desenvolvedor 
                        unitId='ca-app-pub-8667301238982350/7038765928'
                        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}

                        // Adiciona um log para quando o anúncio carregar com sucesso
                        onAdLoaded={() => {
                            console.log('Ad loaded');
                        }}
                        // Adiciona um log para quando o anúncio falhar ao carregar
                        onAdFailedToLoad={(error) => {
                            console.error('Ad failed to load: ', error);
                        }}
                    />
                    : null}
            </View>

            {/* Exibir o modal de personalização quando isCustomizationVisible for verdadeiro */}
            {isCustomizationVisible && (
                <CustomizationScreen
                    onClose={() => setIsCustomizationVisible(false)} // Fecha o modal
                    visible={undefined}
                />
            )}
        </View>
    );
};

export default ShareScreen;