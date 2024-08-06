import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Styles from './Customization.style';
import I18n from '../../util/i18n';
import Icon from 'react-native-vector-icons/FontAwesome';

// Paleta de cores expandida
const colorShades = {
    gray: [
        '#000000', '#404040', '#595959', '#737373', '#8C8C8C', '#A6A6A6', '#BFBFBF', '#D9D9D9', '#F2F2F2', '#FFFFFF'
    ],
    blue: [
        '#000080', '#00008B', '#0000CD', '#0000FF', '#4169E1', '#4682B4', '#5F9FD7', '#87CEEB', '#ADD8E6', '#E0FFFF'
    ],
    green: [
        '#003300', '#004d00', '#006600', '#008000', '#00a000', '#66cdaa', '#9acd32', '#32cd32', '#98fb98', '#f0fff0'
    ],
    red: [
        '#8b0000', '#a52a2a', '#b22222', '#dc143c', '#ff0000', '#ff6347', '#ff7f50', '#ff8c00', '#ffa07a', '#ffd700'
    ],
    yellow: [
        '#ffd700', '#ffea00', '#fff000', '#ffffe0', '#ffff00', '#fffff0', '#fafad2', '#fffacd', '#f0e68c', '#e0e0e0'
    ],
};

interface ColorBackgroundProps {
    visible: boolean;
    onClose: () => void;
    onConfirm: (color: string) => void; // Atualiza a função onConfirm para receber a cor selecionada
}

const ColorBackground: React.FC<ColorBackgroundProps> = ({ visible, onClose, onConfirm }) => {
    const [selectedColor, setSelectedColor] = useState<string | null>(null); // Estado para armazenar a cor selecionada

    const handleColorSelect = (color: string) => {
        setSelectedColor(color); // Armazena a cor selecionada no estado
    };

    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={Styles.FundoBackground}>
                <View style={Styles.Container}>
                    <Text style={Styles.Title}>{I18n.t('Choose_Color')}</Text>
                    
                    <ScrollView style={styles.scrollContainer}>
                        {Object.entries(colorShades).map(([colorName, shades]) => (
                            <View key={colorName} style={styles.colorRow}>
                                {shades.map((shade) => (
                                    <TouchableOpacity
                                        key={shade}
                                        style={[styles.colorButton, { backgroundColor: shade }, selectedColor === shade && styles.selectedButton]}
                                        onPress={() => handleColorSelect(shade)}
                                        accessible={true}
                                        accessibilityLabel={`Select ${shade}`} // Adiciona acessibilidade
                                    >
                                        {selectedColor === shade && <Icon name="check" style={styles.checkIcon} />}
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ))}
                    </ScrollView>

                    <View style={Styles.buttonContainer}>
                        <TouchableOpacity style={Styles.modalButton} onPress={onClose}>
                            <Icon name="times-circle" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>{I18n.t('Close')}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={Styles.modalButton}
                            onPress={() => {
                                if (selectedColor) {
                                    onConfirm(selectedColor); // Passa a cor selecionada para a função de confirmação
                                }
                            }}
                        >
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
    scrollContainer: {
        maxHeight: '70%', // Limita a altura do ScrollView
    },
    colorRow: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Permite que os botões de cor se movam para a linha seguinte
        justifyContent: 'flex-start', // Alinha os botões à esquerda
        marginVertical: 10,
    },
    colorButton: {
        width: 50, // Aumentado para 60 pixels
        height: 50, // Aumentado para 60 pixels
        borderRadius: 25, // Botões arredondados
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'transparent', // Cor do contorno padrão
        marginRight: 10, // Espaço entre os botões
        marginBottom: 10, // Espaço entre as linhas
    }, // Espaço entre as linhas

    selectedButton: {
        borderColor: '#FFFFFF', // Adiciona um contorno quando a cor é selecionada
    },
    checkIcon: {
        color: '#FFFFFF', // Cor do ícone de verificação
        position: 'absolute',
        fontSize: 30, // Aumenta o tamanho do ícone de verificação
    },
});

export default ColorBackground;
