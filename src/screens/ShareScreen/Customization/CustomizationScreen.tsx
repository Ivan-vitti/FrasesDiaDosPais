import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './Customization.style';
import I18n from '../../../util/i18n';
import ImageSourceModal from './ImageSourceModal'; // Importe o modal
import ColorBackground from './ColorBackground'; // Importe o modal de seleção de cor
import FontColor from './FontColor'; // Certifique-se de que você tenha este componente
import EditFont from './EditFont';

interface CustomizationScreenProps {
    visible: boolean;
    onClose: () => void;
    onOpenGallery: () => void;
    onImageSelected: (uri: string) => void;
    onColorConfirm: (color: string) => void; // Adicione esta prop
    onFontColorConfirm: (color: string) => void; // Adicione esta prop para cor da fonte
    onFontConfirm: (fontName: string) => void; // Adicione esta linha

}

const CustomizationScreen: React.FC<CustomizationScreenProps> = ({
    visible,
    onClose,
    onOpenGallery,
    onImageSelected,
    onColorConfirm,
    onFontColorConfirm,
    onFontConfirm,
}) => {

    const [isImageSourceModalVisible, setImageSourceModalVisible] = useState(false);
    const [isColorBackgroundVisible, setColorBackgroundVisible] = useState(false);
    const [isFontColorVisible, setFontColorVisible] = useState(false); // Corrigido para usar o estado certo
    const [isFontModalVisible, setFontModalVisible] = useState(false);



    // Abre o modal para escolher a origem da imagem
    const handleOpenImageSourceModal = () => {
        setImageSourceModalVisible(true);
    };

    const handleCloseImageSourceModal = () => {
        setImageSourceModalVisible(false);
    };

    const handleSelectSource = (source: string) => {
        onImageSelected(source); // Passa o URI da imagem selecionada para a tela de compartilhamento
        setImageSourceModalVisible(false); // Fecha o modal após a seleção
        onClose(); // Fecha o modal principal após a seleção da imagem
    };

    // Abre o modal para escolher a cor de fundo
    const handleOpenColorBackgroundModal = () => {
        setColorBackgroundVisible(true);
    };

    const handleCloseColorBackgroundModal = () => {
        setColorBackgroundVisible(false);
    };

    // Abre o seletor de cor da fonte
    const handleOpenFontColorPicker = () => {
        setFontColorVisible(true); // Corrigido para abrir o modal
    };

    const handleCloseFontColorModal = () => {
        setFontColorVisible(false);
    };

    const handleColorConfirm = (color: string) => {
        onColorConfirm(color); // Chama a função recebida para passar a cor de fundo
        handleCloseColorBackgroundModal(); // Fecha o modal de seleção de cor de fundo
    };

    const handleFontColorConfirm = (color: string) => {
        onFontColorConfirm(color); // Chama a função recebida para passar a cor da fonte
        handleCloseFontColorModal(); // Fecha o seletor de cor da fonte
    };

    //-------------------Alterar a Fonte----------------------------------------------

    const handleOpenFontModal = () => {
        setFontModalVisible(true);
    };

    const handleFontSelect = (fontName: string) => {
        onFontConfirm(fontName); // Confirma a fonte selecionada
        onClose(); // Fecha a tela de personalização ao escolher a fonte
        setFontModalVisible(false); // Fecha o modal de seleção de fonte
    };



    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={Styles.FundoBackground}>
                <View style={[Styles.Container, { opacity: 0.93 }]}>
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
                        <TouchableOpacity style={Styles.modalButton} onPress={handleOpenFontModal}>
                            <Icon name="font" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>{I18n.t('Font')}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.modalButton} onPress={handleOpenFontColorPicker}>
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

                    {/* Modal de Seleção de Cor de Fundo */}
                    <ColorBackground
                        visible={isColorBackgroundVisible}
                        onClose={handleCloseColorBackgroundModal}
                        onConfirm={handleColorConfirm} // Passa a função
                    />

                    {/* Modal de Seleção de Cor da Fonte */}
                    <FontColor
                        visible={isFontColorVisible}
                        onClose={handleCloseFontColorModal} // Corrigido para usar a função de fechamento correta
                        onConfirm={handleFontColorConfirm}
                    />

                    <EditFont
                        visible={isFontModalVisible}
                        onClose={() => setFontModalVisible(false)}
                        onFontSelect={handleFontSelect} // Altere aqui para onFontSelect
                    />
                </View>
            </View>
        </Modal>
    );
};

export default CustomizationScreen;
