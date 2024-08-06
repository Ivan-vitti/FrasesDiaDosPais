import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Styles from './Customization.style';
import I18n from '../../util/i18n';
import Icon from 'react-native-vector-icons/FontAwesome';

const colors = [
    '#FF5733', // Vermelho
    '#33FF57', // Verde
    '#3357FF', // Azul
    '#F1C40F', // Amarelo
    '#9B59B6', // Roxo
    '#2ECC71', // Verde Claro
];

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
                    
                    <View style={styles.colorContainer}>
                        {colors.map((color) => (
                            <TouchableOpacity
                                key={color}
                                style={[styles.colorButton, { backgroundColor: color }]}
                                onPress={() => handleColorSelect(color)}
                            >
                                {selectedColor === color && <Icon name="check" style={styles.checkIcon} />}
                            </TouchableOpacity>
                        ))}
                    </View>

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
    colorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    colorButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'transparent', // Cor do contorno padrão
    },
    checkIcon: {
        color: '#FFFFFF', // Cor do ícone de verificação
        position: 'absolute',
    },
});

export default ColorBackground;
