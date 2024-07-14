import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import PHRASES from "../../services/PhrasesMockService";
import I18n from '../../util/i18n';
import GlobalStyles from "../../Styles/GlobalStyles";
import Styles, { colors } from "./PhrasesScreen.style";
import Icon from 'react-native-vector-icons/FontAwesome';

//Navigation.navigate('Share', { phrase: phrase });

const PhrasesScreen = ({navigation}) => {
    const navShare = (phrase: string) => {
      navigation.navigate('Share', {phrase: phrase});
    };

    return (
        <View style={GlobalStyles.body}>

            <FlatList data={PHRASES} renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navShare(item.phrase)}>
                        <View style={Styles.boxPhrase}>
                            <Icon name={'envelope-o'} size={39} color={colors.textPrimary} />
                            <Text style={Styles.text}>{I18n.t(item.phrase)}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }} />

        </View>
    );
}

export default PhrasesScreen;