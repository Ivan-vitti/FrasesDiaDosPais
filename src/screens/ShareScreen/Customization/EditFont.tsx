import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
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
        'Beardsons',
        'Blinker',
        'BungeeTint',
        'ComingSoon',
        'DancingScript',
        'Deansgate_Condensed',
        'Fearce',
        'FjallaOne',
        'Gellaghan',
        'GreyQo',
        'IndieFlower',
        'Lobster',
        'Matemasie',
        'NewAmsterdam',
        'Queensila',
        'Roboto',
        'Sora_Variable',
        'Theater_Brillion',
        'Unna',
        'Varela_Round'
    ];

    const [selectedFont, setSelectedFont] = useState<string | null>(null);

    const handleFontSelect = (font: string) => {
        setSelectedFont(font); // Armazena a fonte selecionada
        onFontSelect(font); // Chama a função de seleção de fonte
    //    onClose(); // Fecha a tela de escolha de fonte e a tela de personalização
    };

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.FundoBackground}>
                <View style={styles.Container01}>
                    <Text style={styles.Title01}>{I18n.t('Choose_the_font_type')}</Text>
                    <FlatList
                        data={fonts}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => handleFontSelect(item)}
                                style={[
                                    styles.buttonContainer01,
                                    { backgroundColor: selectedFont === item ? colors.selectedBackground : colors.background }
                                ]}
                            >
                                <Text
                                    style={[styles.subtitle, { fontFamily: item, fontWeight: selectedFont === item ? 'bold' : 'normal' }]}
                                    accessibilityLabel={`Select ${item} font`}
                                >
                                    {item} {/* Exibe o nome da fonte */}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                    <View style={styles.buttonContainer01}>
                    <TouchableOpacity
                            onPress={onClose} 
                            style={styles.modalButtonLocal}
                            accessibilityLabel="Apply"
                            accessibilityHint="Apply the selected font size without closing the modal"
                        >
                            <Icon name="check" style={styles.iconStyle} />
                            <Text style={styles.subtitle}>{I18n.t('Apply')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({

    buttonContainer01: {
        flexDirection: 'row',
        justifyContent: 'center', // Muda para 'space-between' para deixar os botões nos extremos
        width: '100%', // Certifique-se de que o container ocupe a largura total
        paddingTop: 10, // Diminuir o espaço
        borderRadius: 25, // Bordas arredondadas do modal
    },
    modalButtonLocal: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 10,
    },
    Container01: {
        width: '80%', // Largura do modal em 90% da tela
        height: '35%', // Diminuir a altura do modal
        backgroundColor: colors.background, // Cor de fundo do modal
        borderRadius: 15, // Bordas arredondadas do modal
        padding: 10, // Diminuir o espaçamento interno do modal
        alignItems: 'center', // Alinhamento do conteúdo no centro
        marginTop: '70%', // Ajustar a posição do modal
    },
    subtitle: {
        fontSize: 19,                        // Tamanho da fonte
        textAlign: 'left',
        fontWeight: 'bold',                  // Peso da fonte
        color: colors.textPrimary,           // Cor do texto
        fontFamily: 'Arial, sans-serif',     // Fonte
        marginHorizontal: 15,                // Margem vertical
        marginTop: 5,                       // Margem superior para espaçamento do topo
        marginBottom: 15,                    // Margem inferior para espaçamento do texto abaixo
      },

    Title01: {
        fontSize: 22, // Tamanho da fonte do título do modal
        alignItems: 'center', // Alinhamento do conteúdo no centro
        fontWeight: 'bold', // Estilo da fonte em negrito
        color: colors.textPrimary, // Cor do texto do título definida pelas cores do aplicativo
        marginVertical: 3, // Margem vertical para espaçamento acima e abaixo do título
      },
      iconStyle: {
        fontSize: 33,            // Tamanho do ícone
        color: colors.iconActive, // Cor do ícone
      },
      FundoBackground: {
        flex: 1, // O modal ocupa todo o espaço disponível
        justifyContent: 'center', // Centraliza o conteúdo verticalmente
        alignItems: 'center', // Centraliza o conteúdo horizontalmente
        backgroundColor: 'rgba(0, 0, 0, 0. 5)', // Fundo escuro semi-transparente para o modal
      },
});

export default EditFont;
