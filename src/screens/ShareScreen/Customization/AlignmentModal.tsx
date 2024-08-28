import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import I18n from '../../../util/i18n';
import Styles, { colors } from './Customization.style';

interface AlignmentModalProps {
    visible: boolean;
    onClose: () => void;
    onConfirm: (horizontal: 'left' | 'center' | 'right', vertical: 'top' | 'center' | 'bottom') => void;
}

const AlignmentModal: React.FC<AlignmentModalProps> = ({ visible, onClose, onConfirm }) => {
    const [selectedAlignment, setSelectedAlignment] = React.useState<'horizontal' | 'vertical'>('horizontal');
    const [selectedHorizontal, setSelectedHorizontal] = React.useState<'left' | 'center' | 'right'>('left');
    const [selectedVertical, setSelectedVertical] = React.useState<'top' | 'center' | 'bottom'>('top');

    const handleHorizontalAlignment = (index: number) => {
        const horizontalAlignments: ('left' | 'center' | 'right')[] = ['left', 'center', 'right'];
        const selectedHorizontal = horizontalAlignments[index];
        setSelectedHorizontal(selectedHorizontal);
        if (selectedAlignment === 'horizontal') {
            onConfirm(selectedHorizontal, selectedVertical);
        }
    };

    const handleVerticalAlignment = (index: number) => {
        const verticalAlignments: ('top' | 'center' | 'bottom')[] = ['top', 'center', 'bottom'];
        const selectedVertical = verticalAlignments[index];
        setSelectedVertical(selectedVertical);
        if (selectedAlignment === 'vertical') {
            onConfirm(selectedHorizontal, selectedVertical);
        }
    };

    const horizontalButtons = [I18n.t('Horizontal_left'), I18n.t('Horizontal_center'), I18n.t('Horizontal_right')];
    const verticalButtons = [I18n.t('Vertical_top'), I18n.t('Vertical_center'), I18n.t('Vertical_bottom')];

    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={Styles.FundoBackground}>
                <View style={styles.ContainerLocal}>
                    <Text style={Styles.Title}>{I18n.t('Select_Alignment')}</Text>

                    <View style={Styles.DireçãoRow}>
                        <TouchableOpacity
                            style={[
                                Styles.modalButton,
                                selectedAlignment === 'horizontal' && styles.selectedButton
                            ]}
                            onPress={() => setSelectedAlignment('horizontal')}
                        >
                            <Icon name='align-justify' style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>{I18n.t('Horizontal')}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                Styles.modalButton,
                                selectedAlignment === 'vertical' && styles.selectedButton
                            ]}
                            onPress={() => setSelectedAlignment('vertical')}
                        >
                            <Icon name="align-center" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>{I18n.t('Vertical')}</Text>
                        </TouchableOpacity>
                    </View>

                    {selectedAlignment === 'horizontal' ? (
                        <View style={styles.buttonGroup}>
                            {horizontalButtons.map((btn, index) => (
                                <Button
                                    key={index}
                                    title={btn}
                                    buttonStyle={styles.button}
                                    onPress={() => handleHorizontalAlignment(index)}
                                />
                            ))}
                        </View>
                    ) : (
                        <View style={styles.buttonGroup}>
                            {verticalButtons.map((btn, index) => (
                                <Button
                                    key={index}
                                    title={btn}
                                    buttonStyle={styles.button}
                                    onPress={() => handleVerticalAlignment(index)}
                                />
                            ))}
                        </View>
                    )}

                    <View style={styles.buttonContainerLocal}>
                        <TouchableOpacity
                            onPress={onClose}
                            style={styles.modalButtonLocal}
                            accessibilityLabel="Close"
                            accessibilityHint="Close the alignment selection"
                        >
                            <Icon name="times-circle" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>{I18n.t('Close')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    buttonGroup: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    button: {
        marginHorizontal: 5,
        backgroundColor: colors.secondary,
        padding: 11,
        borderRadius: 20,
    },
    selectedButton: {
        backgroundColor: colors.iconActive02,
        borderRadius: 20,
        elevation: 6,
        transform: [{ scale: 1.05 }],
    },
    buttonContainerLocal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        paddingTop: 10,
    },
    ContainerLocal: {
        width: '80%',
        height: '40%',
        backgroundColor: colors.background,
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
        marginTop: '60%',
    },
    modalButtonLocal: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 5,
        flex: 1,
    },
    subtitle: {
        fontSize: 16,
    },
});

export default AlignmentModal;