import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import I18n from '../../util/i18n';
import Styles, { colors } from './Customization/Customization.style';
import Icon from 'react-native-vector-icons/FontAwesome';

interface EditPhraseProps {
    visible: boolean;
    phrase: string;
    onClose: () => void;
    onSave: (newPhrase: string) => void;
}

const EditPhrase: React.FC<EditPhraseProps> = ({ visible, phrase, onClose, onSave }) => {
    const [editedPhrase, setEditedPhrase] = useState(phrase);

    const handleSave = () => {
        onSave(editedPhrase);
        onClose();
    };

    return (
        <Modal
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.title}>{I18n.t('Edit_the_Phrase')}</Text>

                        <TextInput
                            style={styles.textInput}
                            value={editedPhrase}
                            onChangeText={setEditedPhrase}
                            multiline
                            textAlignVertical="top"
                        />

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={onClose} style={styles.button} accessibilityLabel={I18n.t('Close')} accessibilityHint={I18n.t('Close_the_modal')}>
                                <Icon name="times-circle" style={styles.icon} />
                                <Text style={styles.buttonText}>{I18n.t('Close')}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleSave} style={styles.button} accessibilityLabel={I18n.t('Ok')} accessibilityHint={I18n.t('Save_and_close')}>
                                <Icon name="check-circle" style={styles.icon} />
                                <Text style={styles.buttonText}>{I18n.t('Ok')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adiciona um fundo semi-transparente
    },
    modalContainer: {
        width: '90%',
        maxHeight: '80%',
        backgroundColor: colors.background,
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000', // Adiciona sombra para efeito de profundidade
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // Para Android
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.textPrimary,
        marginBottom: 15,
    },
    textInput: {
        height: 250, // Ajustado para um tamanho adequado
        borderColor: colors.secondary,
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        width: '100%',
        fontSize: 20,
        color: colors.textPrimary,
        backgroundColor: colors.background,
        textAlignVertical: 'top',
        marginBottom: 20, // Espaço antes dos botões
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: colors.selectedBackground, // Cor de fundo do botão
        borderRadius: 8,
        marginHorizontal: 5,
    },
    icon: {
        fontSize: 25,
        color: colors.iconActive,
        marginRight: 10, // Espaço entre ícone e texto
    },
    buttonText: {
        fontSize: 18,
        color: colors.textPrimary,
    },
});

export default EditPhrase;
