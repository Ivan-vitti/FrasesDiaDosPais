import React, { useState, useRef } from 'react';
import { View, Modal, Button, StyleSheet, ActivityIndicator } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';

type ColorBackgroundProps = {
    visible: boolean;
    onClose: () => void;
    onConfirm: (color: string) => void;
};

const ColorBackground: React.FC<ColorBackgroundProps> = ({ visible, onClose, onConfirm }) => {
    const [selectedColor, setSelectedColor] = useState<string>('#FFFFFF');
    const pickerRef = useRef<ColorPicker | null>(null); // Usando useRef para a referência do ColorPicker

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

    const handleConfirm = () => {
        if (pickerRef.current) {
            onConfirm(selectedColor);
        }
        onClose();
    };

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.pickerContainer}>
                    <ColorPicker
                        ref={pickerRef}
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
                    <View style={styles.buttonContainer}>
                        <Button title="Cancelar" onPress={onClose} />
                        <Button title="OK" onPress={handleConfirm} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    pickerContainer: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
});

export default ColorBackground;
