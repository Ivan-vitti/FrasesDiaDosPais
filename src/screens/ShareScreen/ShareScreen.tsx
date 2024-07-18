import { Text, TouchableOpacity, View } from 'react-native';

import I18n from '../../util/i18n';
import GlobalStyles from '../../Styles/GlobalStyles';
import Styles, { colors } from './ShareScreen.style';
import React, { useEffect, useRef, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";
import Share from 'react-native-share';
import { AdEventType, BannerAd, BannerAdSize, InterstitialAd, TestIds } from 'react-native-google-mobile-ads';


const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-8667301238982350/7956245862');




const ShareScreen = ({ navigation }) => {

    const bannerRef = useRef<BannerAd>(null);
    const route = useRoute();
    const phrase = route.params?.phrase;
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
            setLoaded(true);
        });

        interstitial.addAdEventListener(AdEventType.CLOSED, () => {
            shareFinish();
        });

        // Start loading the interstitial straight away
        interstitial.load();

        // Unsubscribe from events on unmount
        return unsubscribe;
    }, []);

    const share = () => {

        if (loaded) {
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
            </View>
            <View style={Styles.bannerContainer}>
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
            </View>
        </View >
    );
}

export default ShareScreen;