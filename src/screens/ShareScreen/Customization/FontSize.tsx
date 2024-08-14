import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider'; // Importando o Slider
import Styles, { colors } from './Customization.style';
import I18n from '../../../util/i18n';
import Icon from 'react-native-vector-icons/FontAwesome';

interface FontSizeProps {
    visible: boolean;
    onClose: () => void; // Função para fechar o modal de tamanho da fonte
    onFontSizeChange: (size: number) => void; // Função para alterar o tamanho da fonte
    onCloseCustomization: () => void; // Nova prop para fechar a tela de personalização
}

const FontSize: React.FC<FontSizeProps> = ({ visible, onClose, onFontSizeChange, onCloseCustomization }) => {
    const [fontSize, setFontSize] = useState(26); // Tamanho da fonte inicial

    const handleFontSizeChange = (newSize: number) => {
        setFontSize(newSize);
        console.log('Tamanho da fonte atualizado:', newSize); // Log para verificação
    };

    const handleConfirm = () => {
        onFontSizeChange(fontSize); // Passa o tamanho da fonte para a função de callback
        onClose(); // Fecha o modal de tamanho da fonte
        onCloseCustomization(); // Fecha a tela de personalização
    };

    const handleApply = () => {
        console.log('Botão Aplicar pressionado'); // Log para verificação
        onFontSizeChange(fontSize); // Aplica o tamanho da fonte sem fechar o modal
    };

    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={Styles.FundoBackground}>
                <View style={[styles.ContainerLocal, { opacity: 0.95 }]}>
                    <Text style={Styles.Title}>{I18n.t('Font_Size')}</Text>

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
                    <Text style={[Styles.subtitle, { fontSize }]}>{fontSize} </Text>

                    <View style={styles.buttonContainerLocal}>
                        <TouchableOpacity
                            onPress={handleApply} // Chama handleApply ao pressionar
                            style={styles.modalButtonLocal}
                            accessibilityLabel="Apply"
                            accessibilityHint="Apply the selected font size without closing the modal"
                        >
                            <Icon name="check" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>{I18n.t('Apply')}</Text>
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

    ContainerLocal: {
        width: '80%', // Largura do modal em 90% da tela
        height: '36%', // Altura do modal em 60% da tela
        backgroundColor: colors.background, // Cor de fundo do modal definida pelas cores do aplicativo
        borderRadius: 25, // Bordas arredondadas do modal
        padding: 10, // Espaçamento interno do modal
        alignItems: 'center', // Alinhamento do conteúdo no centro
        marginTop: '30%', // Ajuste esse valor para trazer o modal mais para baixo
    },

    buttonContainerLocal: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 25,
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
