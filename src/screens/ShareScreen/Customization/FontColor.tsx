import React, { useState } from 'react';
import { View, Modal, ActivityIndicator, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles, { colors } from './Customization.style';
import I18n from '../../../util/i18n';

type FontColorProps = {
    visible: boolean;
    onClose: () => void;
    onConfirm: (color: string) => void;
    onCloseCustomization: () => void; // Nova prop para fechar a tela de personalização
};

const FontColor: React.FC<FontColorProps> = ({ visible, onClose, onConfirm, onCloseCustomization }) => {
    const [selectedColor, setSelectedColor] = useState<string>('#000000');

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

    const handleApply = () => {
        onConfirm(selectedColor); // Aplica a cor selecionada
        // Não fecha o modal, permitindo que o usuário continue ajustando a cor
    };

    return (
        <Modal
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                onClose();
                onCloseCustomization(); // Fecha a tela de personalização ao fechar
            }}
        >
            <View style={Styles.FundoBackground}>
                <View style={[styles.ContainerLocal, { opacity: 0.95 }]}>
                    <Text style={Styles.Title}>{I18n.t('Font_Color_School')}</Text>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <ColorPicker
                            color={selectedColor}
                            swatchesOnly={false}
                            onColorChange={handleColorChange}
                            thumbSize={30} // Diminuir o tamanho do thumb
                            sliderSize={30} // Diminuir o tamanho do slider
                            noSnap={true}
                            row={false}
                            wheelLoadingIndicator={<ActivityIndicator size={15} />} // Diminuir o tamanho do carregador
                            sliderLoadingIndicator={<ActivityIndicator size={15} />} // Diminuir o tamanho do carregador
                            useNativeDriver={false}
                            useNativeLayout={false}
                        />

                        <View style={styles.buttonContainerLocal}>
                            <TouchableOpacity onPress={handleApply} style={styles.modalButtonLocal} accessibilityLabel="Apply" accessibilityHint="Apply the selected color">
                                <Icon name="check-circle" style={Styles.iconStyle} />
                                <Text style={Styles.subtitle}>{I18n.t('Apply')}</Text>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={onClose} style={styles.modalButtonLocal} accessibilityLabel="Close" accessibilityHint="Close the color selection">
                                <Icon name="times-circle" style={Styles.iconStyle} />
                                <Text style={Styles.subtitle}>{I18n.t('Close')}</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    buttonContainerLocal: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Muda para 'space-between' para deixar os botões nos extremos
        width: '100%', // Certifique-se de que o container ocupe a largura total
        paddingTop: 20, // Diminuir o espaço
    },
    ContainerLocal: {
        width: '90%', // Largura do modal em 90% da tela
        height: '45%', // Diminuir a altura do modal
        backgroundColor: colors.background, // Cor de fundo do modal
        borderRadius: 15, // Bordas arredondadas do modal
        padding: 10, // Diminuir o espaçamento interno do modal
        alignItems: 'center', // Alinhamento do conteúdo no centro
        marginTop: '50%', // Ajustar a posição do modal
    },
    modalButtonLocal: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 5, // Diminuir o padding vertical
        flex: 1, // Adiciona flex para cada botão ocupar igual espaço
    },
    subtitle: {
        fontSize: 14, // Diminuir o tamanho da fonte
    },
});

export default FontColor;
