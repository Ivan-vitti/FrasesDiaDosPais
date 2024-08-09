import React, { useState, useRef, useEffect } from 'react';
import { View, Modal, ActivityIndicator, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import Canvas from 'react-native-canvas';
import Styles from './Customization.style';
import I18n from '../../../util/i18n';
import Icon from 'react-native-vector-icons/FontAwesome';
import ReactNativeBlobUtil from 'react-native-blob-util';

type ColorBackgroundProps = {
    visible: boolean;
    onClose: () => void;
    onConfirm: (color: string) => void;
};

const ColorBackground: React.FC<ColorBackgroundProps> = ({ visible, onClose, onConfirm }) => {
    const [selectedColor, setSelectedColor] = useState<string>('#FFFFFF');
    const canvasRef = useRef<Canvas | null>(null);

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

    // Efeito para atualizar o canvas quando a cor selecionada muda
    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            ctx.fillStyle = selectedColor;
            ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
    }, [selectedColor]);

    const handleCanvas = (canvas: Canvas) => {
        canvasRef.current = canvas;
        const ctx = canvas.getContext('2d');
        canvas.width = 100; // Defina a largura do canvas
        canvas.height = 100; // Defina a altura do canvas
        ctx.fillStyle = selectedColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const handleConfirm = async () => {
        if (canvasRef.current) {
            try {
                const dataUrl = await canvasRef.current.toDataURL('image/png');
                const base64Data = dataUrl.split(',')[1]; // Extrai a parte base64 do data URL
                const filePath = `${ReactNativeBlobUtil.fs.dirs.CacheDir}/colorBackground.png`;

                // Salva a imagem em base64
                await ReactNativeBlobUtil.fs.writeFile(filePath, base64Data, 'base64');
                onConfirm(filePath);
            } catch (error) {
                console.error("Erro ao salvar a imagem:", error);
            }
        }
        onClose();
    };

    return (
        <Modal
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={Styles.FundoBackground}>
                <View style={Styles.Container}>
                    <Text style={Styles.Title}>{I18n.t('Choose_Color')}</Text>
                    <ScrollView contentContainerStyle={{ flexGrow: 0.3 }}>
                        <ColorPicker
                            color={selectedColor}
                            swatchesOnly={false}
                            onColorChange={handleColorChange}
                            thumbSize={40}
                            sliderSize={40}
                            noSnap={true}
                            row={false}
                            wheelLoadingIndicator={<ActivityIndicator size={40} />}
                            sliderLoadingIndicator={<ActivityIndicator size={20} />}
                            useNativeDriver={false}
                            useNativeLayout={false}
                        />

                        <Canvas ref={handleCanvas} style={{ width: 100, height: 100 }} /> {/* Canvas visível */}

                        <View style={styles.buttonContainerLocal}>
                            <TouchableOpacity onPress={onClose} style={styles.modalButtonLocal} accessibilityLabel="Close" accessibilityHint="Close the color selection">
                                <Icon name="times-circle" style={Styles.iconStyle} />
                                <Text style={Styles.subtitle}>{I18n.t('Close')}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleConfirm} style={styles.modalButtonLocal} accessibilityLabel="Confirm" accessibilityHint="Confirm the selected color">
                                <Icon name="check-circle" style={Styles.iconStyle} />
                                <Text style={Styles.subtitle}>{I18n.t('Ok')}</Text>
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
        justifyContent: 'space-evenly', // Para centralizar os botões
        paddingTop: 40, // Aumente este valor para abaixar mais os botões
    },
    modalButtonLocal: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 10, // Aumenta a área clicável
    },
});

export default ColorBackground;
