import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
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

    const images = [
        require('../../assets/images/Home01.png'),
    ];


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
                let numberRamdom = Math.floor(Math.random() * 99);
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
                    <Image
                        source={images[0]}
                        style={{
                            width: '100%',               // 1. Largura completa do contêiner pai
                            aspectRatio: 2 / 3,          // 2. Proporção da imagem (largura:altura)
                            resizeMode: 'cover',         // 3. Como a imagem deve ser ajustada ao contêiner
                            position: 'absolute',        // 4. Posição da imagem em relação ao contêiner pai
                            top: 0,                      // 5. Distância do topo do contêiner pai
                            left: 0,                     // 6. Distância da esquerda do contêiner pai
                            zIndex: -1,                  // 7. Ordem de empilhamento da imagem em relação aos outros elementos
                        }}
                    />
                </View>
            </View>

            <View style={{ backgroundColor: colors.background }}>
                {!premium ? (
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
                ) : null}
            </View>
        </View>
    );
}

export default HomeScreen;