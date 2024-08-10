import React, { useState } from 'react';
import { View, Modal, ActivityIndicator, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import Styles from './Customization.style';
import I18n from '../../../util/i18n';
import Icon from 'react-native-vector-icons/FontAwesome';

type ColorBackgroundProps = {
    visible: boolean;
    onClose: () => void;
    onConfirm: (color: string) => void;
};

const ColorBackground: React.FC<ColorBackgroundProps> = ({ visible, onClose, onConfirm }) => {
    const [selectedColor, setSelectedColor] = useState<string>('#FFFFFF');

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

    const handleConfirm = () => {
        onConfirm(selectedColor);
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
        justifyContent: 'space-evenly',
        paddingTop: 40,
    },
    modalButtonLocal: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 10,
    },
});

export default ColorBackground;
