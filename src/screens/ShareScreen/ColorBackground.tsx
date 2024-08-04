import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import Styles from './Customization.style';
import I18n from '../../util/i18n';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ColorBackgroundProps {
    visible: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ColorBackground: React.FC<ColorBackgroundProps> = ({ visible, onClose, onConfirm }) => {
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
        >
            <View style={Styles.FundoBackground}>
                <View style={Styles.Container}>

                    <Text style={Styles.Title}>{I18n.t('Choose_Color')}</Text>
                    {/* Adicione aqui os componentes para seleção de cores */}


                    <View style={Styles.buttonContainer}>
                        <TouchableOpacity style={Styles.modalButton} onPress={onClose}>
                        <Icon name="times-circle" style={Styles.iconStyle} />
                        <Text style={Styles.subtitle}>{I18n.t('Close')}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.modalButton} onPress={onConfirm}>
                        <Icon name="check-circle" style={Styles.iconStyle} />
                        <Text style={Styles.subtitle}>{I18n.t('Ok')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ColorBackground;
