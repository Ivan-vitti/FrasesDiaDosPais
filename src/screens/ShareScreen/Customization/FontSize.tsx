import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider'; // Importando o Slider
import Styles from './Customization.style';
import I18n from '../../../util/i18n';
import Icon from 'react-native-vector-icons/FontAwesome';

interface FontSizeProps {
    visible: boolean;
    onClose: () => void;
    onFontSizeChange: (size: number) => void; // Função para alterar o tamanho da fonte
}

const FontSize: React.FC<FontSizeProps> = ({ visible, onClose, onFontSizeChange }) => {
    const [fontSize, setFontSize] = useState(16); // Tamanho da fonte inicial

    const handleFontSizeChange = (newSize: number) => {
        setFontSize(newSize);
        console.log('Tamanho da fonte atualizado:', newSize); // Log para verificação
    };

    const handleConfirm = () => {
        onFontSizeChange(fontSize); // Passa o tamanho da fonte para a função de callback
        onClose(); // Fecha o modal
    };

    const handleApply = () => {
        console.log('Botão Aplicar pressionado');
        onFontSizeChange(fontSize); // Aplica o tamanho da fonte sem fechar o modal
    };
    

    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={Styles.FundoBackground}>
                <View style={Styles.Container}>
                    <Text style={Styles.Title}>Tamanho da Fonte</Text>

                    {/* Slider para ajuste de tamanho da fonte */}
                    <Slider
                        value={fontSize}
                        onValueChange={handleFontSizeChange}
                        minimumValue={10} // Mantenha o mínimo como 10
                        maximumValue={50} // Aumente o máximo para 50 (ou outro valor desejado)
                        step={1}
                        style={styles.slider}
                    />

                    {/* Texto exibido com o tamanho atual da fonte */}
                    <Text style={[Styles.subtitle, { fontSize }]}>
                        Tamanho da fonte: {fontSize} {/* Exibe o tamanho atual da fonte */}
                    </Text>

                    <View style={styles.buttonContainerLocal}>
                        <TouchableOpacity 
                            onPress={handleApply} // Chama handleApply ao pressionar
                            style={styles.modalButtonLocal} 
                            accessibilityLabel="Apply" 
                            accessibilityHint="Apply the selected font size without closing the modal"
                        >
                            <Icon name="check" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>Aplicar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={handleConfirm} // Chama handleConfirm ao pressionar
                            style={styles.modalButtonLocal} 
                            accessibilityLabel="Confirm" 
                            accessibilityHint="Confirm the selected font size and close the modal"
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
    buttonContainerLocal: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 40,
    },
    modalButtonLocal: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 10,
    },
    slider: {
        width: '100%',
        marginTop: 20,
    },
});

export default FontSize;
