import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './Customization.style';
import I18n from '../../util/i18n';
import ImageSourceModal from './ImageSourceModal'; // Importe o modal

import ColorBackground from './ColorBackground';



interface CustomizationScreenProps {
    visible: boolean;  // Defina explicitamente o tipo boolean para visible
    onClose: () => void;  // Defina explicitamente o tipo function para onClose
    onOpenGallery: () => void; // Adicione esta linha
    onImageSelected: (uri: string) => void; // Adicione esta linha
}


const CustomizationScreen: React.FC<CustomizationScreenProps> = ({ visible, onClose, onOpenGallery, onImageSelected }) => {

    const [isImageSourceModalVisible, setImageSourceModalVisible] = useState(false);
    const [isColorBackgroundVisible, setColorBackgroundVisible] = useState(false); // Novo estado para o modal de cor


    const handleOpenImageSourceModal = () => {
        setImageSourceModalVisible(true);
    };

    const handleCloseImageSourceModal = () => {
        setImageSourceModalVisible(false);
    };

    const handleSelectSource = (source: string) => {
        onImageSelected(source); // Passa o URI da imagem selecionada para a tela de compartilhamento
        handleCloseImageSourceModal(); // Fechar o modal após a seleção
    };


    //--------------------cor de fundo----------------------------------- 

    const handleOpenColorBackgroundModal = () => {
        setColorBackgroundVisible(true);
    };

    const handleCloseColorBackgroundModal = () => {
        setColorBackgroundVisible(false);
    };

    const handleColorBackgroundConfirm = () => {
        setColorBackgroundVisible(false);
        // Adicione a lógica para confirmar a seleção de cor
    };


    //------------------------------------------------------------------


    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={Styles.FundoBackground}>
                <View style={Styles.Container}>

                    <Text style={Styles.Title}>{I18n.t('Background_image')}</Text>


                    <View style={Styles.DireçãoRow}>
                        <TouchableOpacity style={Styles.modalButton} onPress={onOpenGallery}>
                            <Icon name="image" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>{I18n.t('Gallery')}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.modalButton} onPress={handleOpenColorBackgroundModal}>
                            <Icon name="tint" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>{I18n.t('Color')}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.modalButton} onPress={handleOpenImageSourceModal}>
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
                        <Text style={Styles.subtitle}>{I18n.t('Ok')}</Text>
                    </TouchableOpacity>

                    {/* Modal de Seleção de Origem da Imagem */}
                    <ImageSourceModal
                        visible={isImageSourceModalVisible}
                        onClose={handleCloseImageSourceModal}
                        onSelectSource={handleSelectSource}
                    />
                    {/* Modal de Seleção de Cor */}
                    <ColorBackground
                        visible={isColorBackgroundVisible}
                        onClose={handleCloseColorBackgroundModal}
                        onConfirm={handleColorBackgroundConfirm}
                    />

                </View>
            </View>
        </Modal>
    );
};

export default CustomizationScreen;