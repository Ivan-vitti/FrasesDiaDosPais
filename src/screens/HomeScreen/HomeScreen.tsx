import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import I18n from '../../util/i18n';
import GlobalStyles from "../../Styles/GlobalStyles";
import PHRASES from "../../services/PhrasesMockService";
import Icon from "react-native-vector-icons/FontAwesome";
import Styles, { colors } from "./HomeScreen.style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';


const HomeScreen = ({ navigation }) => {

    const [premium, setPremium] = useState(false); // cria uma variavel que indique se é premium ou não
    const [phrase, setPhrase] = useState('p0');
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

        const randomPhrase = async () => {
            const dataOpen = await AsyncStorage.getItem('dataOpen');
            const dataAtual = new Date().toLocaleDateString();

            if (dataOpen !== dataAtual) {
                let numberRamdom = Math.floor(Math.random() * 199);
                await AsyncStorage.setItem('dataOpen', dataAtual);
                await AsyncStorage.setItem('idFrase', '' + numberRamdom);
                setPhrase(PHRASES[numberRamdom].phrase);

            } else {
                const idFrase = await AsyncStorage.getItem('idFrase');
                setPhrase(PHRASES[Number(idFrase)].phrase);
            }
        };
        randomPhrase();
    }, []);


    const navShare = () => {
        navigation.navigate('Share', {
            phrase: phrase,

        });
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={[GlobalStyles.container, { backgroundColor: GlobalStyles.body.backgroundColor }]}>
                <Text style={Styles.title}>{I18n.t('phrase_of_day')}</Text>
                <View style={Styles.boxPhrase}>
                    <Text style={Styles.subtitle}>{I18n.t(phrase)}</Text>
                </View>
                <View style={GlobalStyles.body}>
                    <TouchableOpacity style={Styles.buttonPrimary} onPress={navShare}>
                        <Icon name={'share-alt-square'} size={40} color={colors.iconColorBotão} />
                        <Text style={Styles.buttonTextPrimary}>{I18n.t('share')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={Styles.bannerContainer}>
                {!premium ?
                    <BannerAd
                        ref={bannerRef}
                        unitId='ca-app-pub-8667301238982350/7038765928'
                        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}

                        // Adiciona um log para quando o anúncio carregar com sucesso
                        onAdLoaded={() => {
                            console.log('Ad loaded So VAiiiiiii');
                        }}
                        // Adiciona um log para quando o anúncio falhar ao carregar
                        onAdFailedToLoad={(error) => {
                            console.error('Ad failed to load: Falha ao carregar o Anuncio ', error);
                        }}
                    />
                    : null}
            </View>
        </View>
    );
}

export default HomeScreen;

