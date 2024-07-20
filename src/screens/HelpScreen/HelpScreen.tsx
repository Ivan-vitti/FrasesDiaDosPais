import { View, Text, ScrollView, } from "react-native";
import GlobalStyles from "../../Styles/GlobalStyles";
import I18n from '../../util/i18n';
import Styles, { colors } from "./HelpScreen.style";
import React, { useRef } from "react";
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const HelpScreen = () => {
    const bannerRef = useRef<BannerAd>(null);

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }} style={GlobalStyles.body}>
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

            <View style={[Styles.bannerContainer, { position: 'absolute', bottom: 0, width: '100%' }]}>
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
            </View>
        </View>
    );
}

export default HelpScreen;