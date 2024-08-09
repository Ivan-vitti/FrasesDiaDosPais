import React from 'react';
import { Modal, View, Text, TouchableOpacity, Image } from 'react-native';
import Styles, { colors } from './Customization.style'; // Importa os estilos e as cores
import Icon from 'react-native-vector-icons/FontAwesome';
import I18n from '../../../util/i18n';
import { launchCamera, launchImageLibrary, CameraOptions, ImageLibraryOptions, MediaType } from 'react-native-image-picker';

interface ImageSourceModalProps {
    visible: boolean;
    onClose: () => void;
    onSelectSource: (source: string) => void;
}

const ImageSourceModal = ({ visible, onClose, onSelectSource }: ImageSourceModalProps) => {
    const openCamera = () => {
        const options: CameraOptions = {
            mediaType: 'photo', // Tipo de mídia correto
            cameraType: 'back', // Usando o tipo de câmera
            quality: 0.8,
        };

        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled camera');
                return;
            }
            if (response.errorCode) {
                console.error('Camera error: ', response.errorMessage);
                return;
            }
            if (response.assets) {
                const { uri } = response.assets[0];
                if (uri) {
                    onSelectSource(uri); // Passa a imagem da câmera
                }
            }
        });
    };

    const openGallery = () => {
        const options: ImageLibraryOptions = {
            mediaType: 'photo' as MediaType, // Use o tipo correto
            quality: 0.8,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
                return;
            }
            if (response.errorCode) {
                console.error('ImagePicker error: ', response.errorMessage);
                return;
            }
            if (response.assets) {
                const { uri } = response.assets[0]; // Pega o URI da imagem
                if (uri) {
                    onSelectSource(uri); // Passa a imagem da galeria
                }
            }
        });
    };


    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={Styles.FundoBackground}>
                <View style={Styles.Container}>
                    <Text style={Styles.Title}>{I18n.t('Choose_the_image_source')}</Text>
                    <View style={Styles.DireçãoRow}>

                        <View style={Styles.Column}>
                            <TouchableOpacity onPress={openCamera} style={Styles.modalButton}>
                                <Icon name="camera" style={Styles.iconStyle} />
                                <Text style={Styles.subtitle}>{I18n.t('Camera')}</Text>
                                
                            </TouchableOpacity>
                                <TouchableOpacity onPress={() => onSelectSource('back')} style={Styles.modalButton}>
                                    <Icon name="reply" style={Styles.iconStyle} />
                                    <Text style={Styles.subtitle}>{I18n.t('Back')}</Text>
                                </TouchableOpacity>
                        </View>

                        <View style={Styles.Column}>
                            <TouchableOpacity onPress={openGallery} style={Styles.modalButton}>
                                <Icon name="picture-o" style={Styles.iconStyle} />
                                <Text style={Styles.subtitle}>{I18n.t('Gallery')}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={onClose} style={Styles.modalButton}>
                                <Icon name="times-circle" style={Styles.iconStyle} />
                                <Text style={Styles.subtitle}>{I18n.t('Close')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ImageSourceModal;
