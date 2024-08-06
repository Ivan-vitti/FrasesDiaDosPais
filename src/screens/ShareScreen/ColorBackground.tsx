import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Styles from './Customization.style';
import I18n from '../../util/i18n';
import Icon from 'react-native-vector-icons/FontAwesome';

// Paleta de cores com tons únicos
const colorShades = {
    gray: [
        '#000000', // Black
        '#696969', // DimGray
        '#808080', // Gray
        '#A9A9A9', // DarkGray
        '#C0C0C0', // Silver
        '#D3D3D3', // LightGrey
        '#DCDCDC', // Gainsboro
        '#FFFFFF'  // White
    ],
    blue: [
        '#6A5ACD', // SlateBlue
        '#483D8B', // DarkSlateBlue
        '#191970', // MidnightBlue
        '#000080', // Navy
        '#00008B', // DarkBlue
        '#0000CD', // MediumBlue
        '#0000FF', // Blue
        '#6495ED', // CornflowerBlue
        '#ADD8E6', // LightBlue
        '#87CEFA'  // LightSkyBlue
    ],
    green: [
        '#2F4F4F', // DarkSlateGray
        '#00FA9A', // MediumSpringGreen
        '#00FF7F', // SpringGreen
        '#98FB98', // PaleGreen
        '#90EE90', // LightGreen
        '#8FBC8F', // DarkSeaGreen
        '#3CB371', // MediumSeaGreen
        '#2E8B57', // SeaGreen
        '#66CDAA', // MediumAquamarine
        '#7FFF00'  // Chartreuse
    ],
    red: [
        '#CD5C5C', // IndianRed
        '#F08080', // LightCoral
        '#FA8072', // Salmon
        '#E9967A', // DarkSalmon
        '#FFA07A', // LightSalmon
        '#DC143C', // Crimson
        '#FF0000', // Red
        '#B22222', // FireBrick
        '#FF6347', // Tomato
        '#FF4500'  // OrangeRed
    ],
    yellow: [
        '#FFD700', // Gold
        '#FFFF00', // Yellow
        '#FFFFE0', // LightYellow
        '#FFFACD', // LemonChiffon
        '#FAFAD2', // LightGoldenrodYellow
        '#FFEFD5', // PapayaWhip
        '#FFE4B5', // Moccasin
        '#FFDAB9', // PeachPuff
        '#FFEBCD', // BlanchedAlmond
        '#FFF8DC'  // Cornsilk
    ],
};

interface ColorBackgroundProps {
    visible: boolean;
    onClose: () => void;
    onConfirm: (color: string) => void; // Atualiza a função onConfirm para receber a cor selecionada
}

const ColorBackground: React.FC<ColorBackgroundProps> = ({ visible, onClose, onConfirm }) => {
    const [selectedColor, setSelectedColor] = useState<string | null>(null); // Estado para armazenar a cor selecionada

    // Função para tratar a seleção de cor
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
                                        {selectedColor === shade && (
                                            <View style={styles.checkIconContainer}>
                                                <Icon name="check" style={styles.checkIcon} />
                                            </View>
                                        )}
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
        width: 50, // Aumenta o tamanho do botão de cor
        height: 50,
        borderRadius: 25, // Botões arredondados
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'transparent', // Cor do contorno padrão
        marginRight: 10, // Espaço entre os botões
        marginBottom: 10, // Espaço entre as linhas
    },
    selectedButton: {
        borderColor: '#FFFFFF', // Adiciona um contorno quando a cor é selecionada
    },
    checkIconContainer: {
        borderWidth: 2, // Adiciona a borda ao contorno do ícone
        borderColor: '#000000', // Cor do contorno do ícone
        borderRadius: 15, // Bordas arredondadas
        padding: 2, // Espaçamento interno
    },
    checkIcon: {
        color: '#FFFFFF', // Cor do ícone de verificação
        fontSize: 30, // Aumenta o tamanho do ícone de verificação
    },
});

export default ColorBackground;
