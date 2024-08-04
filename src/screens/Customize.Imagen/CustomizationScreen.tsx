import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './Customization.style';
import I18n from '../../util/i18n';

interface CustomizationScreenProps {
    visible: boolean;  // Defina explicitamente o tipo boolean para visible
    onClose: () => void;  // Defina explicitamente o tipo function para onClose
//    onSelectFont: (font: string) => void;  // Defina explicitamente o tipo function para onSelectFont
}


const CustomizationScreen: React.FC<CustomizationScreenProps> = ({ visible, onClose,}) => {

    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={Styles.FundoBackground}>
                <View style={Styles.Container}>
                    <Text style={Styles.Title}>{I18n.t('Background_image')}</Text>
                    <View style={Styles.DireçãoRow}>
                        <TouchableOpacity style={Styles.modalButton}>
                            <Icon name="image" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>{I18n.t('Gallery')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.modalButton}>
                            <Icon name="tint" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>{I18n.t('Color')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.modalButton}>
                            <Icon name="camera" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>{I18n.t('Camera')}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={Styles.Title}>{I18n.t('Font')}</Text>
                    <View style={Styles.DireçãoRow}>
                        <TouchableOpacity style={Styles.modalButton}>
                            <Icon name="font" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>{I18n.t('Font')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.modalButton}>
                            <Icon name="tint" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>{I18n.t('Font_color')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.modalButton}>
                            <Icon name="text-height" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>{I18n.t('Size')}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={Styles.Title}>{I18n.t('Alignment')}</Text>
                    <View style={Styles.DireçãoRow}>
                        <TouchableOpacity style={Styles.modalButton}>
                            <Icon name="align-left" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>{I18n.t('Horizontal')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.modalButton}>
                            <Icon name="align-center" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>{I18n.t('Vertical')}</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <TouchableOpacity style={Styles.FecharButton} onPress={onClose}>
                        <Icon name="check" style={Styles.iconStyle} />
                        <Text style={Styles.subtitle}>{I18n.t('Close')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default CustomizationScreen;
