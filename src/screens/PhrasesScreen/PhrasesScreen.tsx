import React from "react";
import { View, Text, FlatList,} from "react-native";
import PHRASES from "../../services/PhrasesMockService";
import I18n from '../../util/i18n';
import GlobalStyles from "../../Styles/GlobalStyles";
import Styles from "./PhrasesScreen.style";


const Phrasescreen = () => {
    return (
        <View style={GlobalStyles.body}>
            
                <FlatList data={PHRASES} renderItem={({ item }) => {
                    return (
                        <View>
                            <Text style={Styles.title}>{item.id}</Text>
                            <Text style={Styles.text}>{I18n.t(item.phrase)}</Text>
                        </View>
                    )

                }} />
            
        </View>
    );
}

export default Phrasescreen;