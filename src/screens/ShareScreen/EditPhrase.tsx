import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import I18n from '../../util/i18n';
import Styles from './Customization.style'; // Importando os estilos
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
            <View style={Styles.FundoBackground}>
                <View style={Styles.Container}>
                    <Text style={Styles.Title}>{I18n.t('Edit_the_Phrase')}</Text>

                    <TextInput
                        style={[Styles.textInput, Styles.subtitle]} // Usando estilos personalizados
                        value={editedPhrase}
                        onChangeText={setEditedPhrase}
                        multiline // Permite múltiplas linhas
                        textAlignVertical="top" // Alinha o texto no topo
                    />
                    
                    <View style={Styles.buttonContainer}>
                        <TouchableOpacity onPress={onClose} style={Styles.modalButton}>
                            <Icon name="times-circle" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>{I18n.t('Close')}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleSave} style={Styles.modalButton}>
                            <Icon name="check-circle" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>{I18n.t('Ok')}</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default EditPhrase;