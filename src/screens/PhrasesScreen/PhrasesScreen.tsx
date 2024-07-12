import React from "react";
import { View, Text, FlatList, } from "react-native";
import PHRASES from "../../services/PhrasesMockService";
import I18n from '../../util/i18n';
import GlobalStyles from "../../Styles/GlobalStyles";
import Styles, { colors } from "./PhrasesScreen.style";
import Icon from 'react-native-vector-icons/FontAwesome';



const Phrasescreen = () => {
    return (
        <View style={GlobalStyles.body}>

            <FlatList data={PHRASES} renderItem={({ item }) => {
                return (
                    <View style={Styles.boxPhrase}>
                        <Icon name={'envelope-o'} size={39} color={colors.iconColorBotão} />
                            <Text style={Styles.text}>{I18n.t(item.phrase)}</Text>
                    </View>
                )
            }} />

        </View>
    );
}

export default Phrasescreen;