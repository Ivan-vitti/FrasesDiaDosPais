import React, { useState, useRef } from 'react';
import { View, Modal, ActivityIndicator, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import Styles from './Customization.style';
import I18n from '../../util/i18n';
import Icon from 'react-native-vector-icons/FontAwesome';

type ColorBackgroundProps = {
    visible: boolean;
    onClose: () => void;
    onConfirm: (color: string) => void;
};

const ColorBackground: React.FC<ColorBackgroundProps> = ({ visible, onClose, onConfirm }) => {
    const [selectedColor, setSelectedColor] = useState<string>('#FFFFFF');
    const pickerRef = useRef<ColorPicker | null>(null);

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
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={Styles.FundoBackground}>
                <View style={Styles.Container}>
                    <Text style={Styles.Title}>{I18n.t('Choose_Color')}</Text>
                    <ScrollView contentContainerStyle={{ flexGrow: 0.3 }}>
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

                        <View style={styless.buttonContainerLocal}>
                            <TouchableOpacity onPress={onClose} style={styless.modalButtonLocal}>
                                <Icon name="times-circle" style={Styles.iconStyle} />
                                <Text style={Styles.subtitle}>{I18n.t('Close')}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleConfirm} style={styless.modalButtonLocal}>
                                <Icon name="check-circle" style={Styles.iconStyle} />
                                <Text style={Styles.subtitle}>{I18n.t('Ok')}</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal >
    );
};

const styless = StyleSheet.create({

    buttonContainerLocal: {
        flexDirection: 'row',
        justifyContent: 'space-evenly', // Para centralizar os botões
        paddingTop: 40, // Aumente este valor para abaixar mais os botões
    },
    modalButtonLocal: {
        flexDirection: 'column',
        alignItems: 'center',
    },
});

export default ColorBackground;