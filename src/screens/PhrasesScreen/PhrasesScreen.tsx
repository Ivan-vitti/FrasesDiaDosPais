import React, { useRef } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import PHRASES from "../../services/PhrasesMockService";
import I18n from '../../util/i18n';
import GlobalStyles from "../../Styles/GlobalStyles";
import Styles, { colors } from "./PhrasesScreen.style";
import Icon from 'react-native-vector-icons/FontAwesome';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

//Navigation.navigate('Share', { phrase: phrase });

const PhrasesScreen = ({ navigation }) => {
    const bannerRef = useRef<BannerAd>(null);

    const navShare = (phrase: string) => {
        navigation.navigate('Share', { phrase: phrase });
    };

    return (
        <View style={GlobalStyles.body}>            
            <FlatList
                data={PHRASES}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navShare(item.phrase)}>
                        <View style={Styles.boxPhrase}>
                            <Icon name={'envelope-o'} size={39} color={colors.textPrimary} />
                            <Text style={Styles.text}>{I18n.t(item.phrase)}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
             <View style={Styles.bannerContainer}>
                <BannerAd
                    ref={bannerRef} // Referência para o BannerAd
                    unitId='ca-app-pub-8667301238982350/7038765928'
                    size={BannerAdSize.FULL_BANNER} // Tamanho do banner (FULL_BANNER)
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
};

export default PhrasesScreen;