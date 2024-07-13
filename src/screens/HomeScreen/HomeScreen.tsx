import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import I18n from '../../util/i18n';
import GlobalStyles from "../../Styles/GlobalStyles";
import PHRASES from "../../services/PhrasesMockService";
import Icon from "react-native-vector-icons/FontAwesome";
import Styles, { colors } from "./HomeScreen.style";


const restaurar = () =>
    console.log('restaurar');



const HomeScreen = () => {

    const [phrase, setPhrase] = useState('p0');

    useEffect(() =>{
        
        let numberRamdom = Math.floor(Math.random() * 19)
        console.log(numberRamdom);
        setPhrase(PHRASES[numberRamdom].phrase);

    },[]);

    return (
        <View style={[GlobalStyles.container, { backgroundColor: GlobalStyles.body.backgroundColor }]}>
            <Text style={Styles.title}>{I18n.t('phrase_of_day')}</Text>
            <View style={Styles.boxPhrase}>
                <Text style={Styles.subtitle}>{I18n.t(phrase)}</Text> 
            </View>
            <View style={GlobalStyles.body}>
                    <TouchableOpacity style={Styles.buttonPrimary} onPress={() => restaurar()}>
                        <Icon name={'share-alt-square'} size={40} color={colors.iconColorBotão} />
                        <Text style={Styles.buttonTextPrimary}>{I18n.t('share')}</Text>
                    </TouchableOpacity>
                </View>

        </View>
    );
}


export default HomeScreen;