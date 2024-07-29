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
import CustomizationScreen from '../Customize.Imagen';
import CustomButton from './CustomButton';



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
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <View style={[GlobalStyles.container, { backgroundColor: GlobalStyles.body.backgroundColor }]}>
                <View style={Styles.boxPhrase}>
                    <Text style={Styles.subtitle}>{I18n.t(phrase)}</Text>
                </View>
            </View>


            <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 10 }}>
                <CustomButton
                    iconName="image"
                    title={I18n.t('Share_Image')}
                    onPress={() => {/* Lógica para compartilhar imagem */ }}
                />

                <CustomButton
                    iconName="share-alt-square"
                    title={I18n.t('Share_Text')}
                    onPress={share}
                />
                
                <CustomButton
                    iconName="pencil"
                    title={I18n.t('Edit_the_Phrase')}
                    onPress={() => {/* Lógica para editar a frase */ }}
                />

                <CustomButton
                    iconName="edit"
                    title={I18n.t('personalize')}
                    onPress={() => setIsCustomizationVisible(true)}
                />

            </View>

            <View>
                {!premium ?
                    <BannerAd
                        ref={bannerRef}
                        unitId='ca-app-pub-8667301238982350/7038765928'
                        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                        onAdLoaded={() => {
                            console.log('Ad loaded');
                        }}
                        onAdFailedToLoad={(error) => {
                            console.error('Ad failed to load: ', error);
                        }}
                    />
                    : null}
            </View>
            <CustomizationScreen
                visible={isCustomizationVisible}
                onClose={() => setIsCustomizationVisible(false)}
            />
        </View>
    );
};

export default ShareScreen;