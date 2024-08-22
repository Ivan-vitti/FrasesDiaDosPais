import React from 'react';
import { Modal, View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import I18n from '../../../util/i18n';
import Styles, { colors } from './Customization.style';

interface AlignmentModalProps {
    visible: boolean;
    onClose: () => void;
    onAlignmentChange: (alignment: 'horizontal' | 'vertical' | 'left' | 'center' | 'right' | 'top' | 'bottom') => void; // Inclua todos os valores possíveis
}

const AlignmentModal: React.FC<AlignmentModalProps> = ({ visible, onClose, onAlignmentChange }) => {
    const [selectedAlignment, setSelectedAlignment] = React.useState<'horizontal' | 'vertical'>('horizontal');

    const handleApply = () => {
        onAlignmentChange(selectedAlignment); // Aplica a alteração sem fechar o modal
    };

    const horizontalButtons = [I18n.t('Horizontal_left'), I18n.t('Horizontal_center'), I18n.t('Horizontal_right')];
    const verticalButtons = [I18n.t('Vertical_top'), I18n.t('Vertical_center'), I18n.t('Vertical_bottom')];

    // Função para lidar com o alinhamento horizontal
    const handleHorizontalAlignment = (index: number) => {
        switch (index) {
            case 0:
                onAlignmentChange('left'); // Alinhamento à esquerda
                break;
            case 1:
                onAlignmentChange('center'); // Alinhamento centralizado
                break;
            case 2:
                onAlignmentChange('right'); // Alinhamento à direita
                break;
        }
    };

    // Função para lidar com o alinhamento vertical
    const handleVerticalAlignment = (index: number) => {
        switch (index) {
            case 0:
                onAlignmentChange('top'); // Alinhamento no topo
                break;
            case 1:
                onAlignmentChange('center'); // Alinhamento centralizado
                break;
            case 2:
                onAlignmentChange('bottom'); // Alinhamento na parte inferior
                break;
        }
    };

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

                    <ScrollView>
                        <View style={styles.buttonContainerLocal}>
                            <TouchableOpacity
                                onPress={handleApply}
                                style={styles.modalButtonLocal}
                                accessibilityLabel="Apply"
                                accessibilityHint="Apply the selected alignment"
                            >
                                <Icon name="check-circle" style={Styles.iconStyle} />
                                <Text style={Styles.subtitle}>{I18n.t('Apply')}</Text>
                            </TouchableOpacity>

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
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    buttonGroupContainer: {
        marginBottom: 20,
    },
    buttonGroup: {
        flexDirection: 'row',
        marginVertical: 10,  
    },
    
    button: {
        marginHorizontal: 5,
        backgroundColor: colors.secondary, // Cor do botão inativo
        padding: 11, // Aumentar o preenchimento para melhor estética
        borderRadius: 20, // Deixa as bordas arredondadas
    },
    selectedButton: {
        marginHorizontal: 5,
        backgroundColor: colors.iconActive02, // Cor do botão selecionado
        borderRadius: 20, // Mantém as bordas arredondadas no botão ativo
        elevation: 6, // Aumenta a sombra para destacar o botão ativo em Android
        transform: [{ scale: 1.05 }], // Leve aumento no tamanho para dar destaque
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
