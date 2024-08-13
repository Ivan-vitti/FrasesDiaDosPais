import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Styles from './Customization.style'; // Certifique-se de que você tem esse arquivo
import { colors } from './Customization.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import I18n from '../../../util/i18n';

interface EditFontProps {
    visible: boolean;
    onClose: () => void;
    onFontSelect: (font: string) => void;
}

const EditFont: React.FC<EditFontProps> = ({ visible, onClose, onFontSelect }) => {
    const fonts = [
        'Beardsons-Normal',
        'Blinker-Regular',
        'BungeeTint-Regular',
        'ComingSoon-Regular',
        'DancingScript-Regular',
        'DeansgateCondensed-Bold',
        'Fearce',
        'FjallaOne-Regular',
        'Gellaghan',
        'GreyQo-Regular',
        'IndieFlower-Regular',
        'Lobster-Regular',
        'Matemasie-Regular',
        'NewAmsterdam-Regular',
        'Queensila',
        'Roboto-Regular',
        'Sora-VariableFont_wght',
        'TheaterBrillionDEMO',
        'Unna-Regular',
        'VarelaRound-Regular'
    ];

    const [selectedFont, setSelectedFont] = useState<string | null>(null);

    const handleFontSelect = (font: string) => {
        setSelectedFont(font); // Armazena a fonte selecionada
        onFontSelect(font); // Chama a função de seleção de fonte
        onClose(); // Fecha a tela de escolha de fonte e a tela de personalização
    };

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={Styles.FundoBackground}>
                <View style={styles.container}>
                    <Text style={Styles.Title}>{I18n.t('Choose_the_font_type')}</Text>
                    <FlatList
                        data={fonts}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => handleFontSelect(item)}
                                style={Styles.modalButton}
                            >
                                <Text
                                    style={[Styles.subtitle, { fontFamily: item, fontWeight: selectedFont === item ? 'bold' : 'normal' }]}
                                    accessibilityLabel={`Select ${item} font`}
                                > 
                                    {item} {/* Exibe o nome da fonte */}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={onClose} style={Styles.modalButton}>
                            <Icon name="check-circle" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>{I18n.t('Ok')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '85%',
        height: '85%',
        backgroundColor: colors.background,
        borderRadius: 20,
        padding: 25,
        alignSelf: 'center',
        marginTop: '10%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
    },

});

export default EditFont;
