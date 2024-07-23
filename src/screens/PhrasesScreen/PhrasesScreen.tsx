import React, { useEffect, useRef, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import PHRASES from "../../services/PhrasesMockService";
import I18n from '../../util/i18n';
import GlobalStyles from "../../Styles/GlobalStyles";
import Styles, { colors } from "./PhrasesScreen.style";
import Icon from 'react-native-vector-icons/FontAwesome';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import AsyncStorage from "@react-native-async-storage/async-storage";


//Navigation.navigate('Share', { phrase: phrase });

const PhrasesScreen = ({ navigation }) => {

    const [premium, setPremium] = useState(false); // cria uma variavel que indique se é premium ou não
    const [selectedPhrase, setSelectedPhrase] = useState<string | null>(null); // Adiciona estado para a frase selecionada
    const bannerRef = useRef<BannerAd>(null);

    const navShare = (phrase: string) => {
        navigation.navigate('Share', { phrase: phrase });
    };

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



    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <FlatList
                data={PHRASES}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        navShare(item.phrase);
                        setSelectedPhrase(item.phrase); // Atualiza a frase selecionada
                    }}>
                        <View style={Styles.boxPhrase}>
                            <Icon
                                name={'envelope-o'}
                                size={39}
                                color={selectedPhrase === item.phrase ? 'red' : colors.textPrimary} // Define a cor com base na seleção
                            />
                            <Text style={Styles.text}>{I18n.t(item.phrase)}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                contentContainerStyle={{ paddingBottom: 80 }} // Adiciona espaço na parte inferior
            />
            <View style={Styles.bannerContainer}>
                {!premium ?
                    <BannerAd
                        ref={bannerRef}
                        unitId='ca-app-pub-8667301238982350/7038765928'
                        size={BannerAdSize.BANNER}
                        onAdLoaded={() => {
                            console.log('Ad loaded');
                        }}
                        onAdFailedToLoad={(error) => {
                            console.error('Ad failed to load: ', error);
                        }}
                    />
                    : null}
            </View>
        </View>
    );
}

export default PhrasesScreen;