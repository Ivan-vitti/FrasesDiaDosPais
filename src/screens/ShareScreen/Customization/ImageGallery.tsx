import React from 'react';
import { Modal, View, FlatList, TouchableOpacity, Image, Text, Dimensions, ScrollView } from 'react-native';
import Styles from '../ShareScreen.style'; // Importando os estilos do ShareScreen
import I18n from '../../../util/i18n';

const { width } = Dimensions.get('window');

interface ImageGalleryProps {
    visible: boolean;
    onClose: () => void;
    onSelectImage: (imageUri: string) => void; // Imagem como URI
}


const images = [
    require('../../../assets/images/Moldura.png'), 
    require('../../../assets/images/Moldura02.jpg'),
    require('../../../assets/images/Moldura03.jpg'),
    require('../../../assets/images/Moldura04.png'),
    require('../../../assets/images/Moldura05.png'),
    require('../../../assets/images/Moldura06.jpg'),
    require('../../../assets/images/Moldura07.png'),
    require('../../../assets/images/Moldura08.png'),
    require('../../../assets/images/Moldura09.png'),
    require('../../../assets/images/Moldura10.png'),
    require('../../../assets/images/Moldura11.png'),
    require('../../../assets/images/Moldura12.jpg'),
    require('../../../assets/images/Moldura13.jpg'),
    require('../../../assets/images/Moldura14.jpg'),
    require('../../../assets/images/Moldura15.jpg'),
    require('../../../assets/images/Moldura16.png'),
    require('../../../assets/images/Moldura17.png'),
    require('../../../assets/images/Moldura18.png'),
    require('../../../assets/images/Moldura19.png'),
    require('../../../assets/images/Moldura20.png'),
    require('../../../assets/images/Moldura24.png'),

    // Adicione mais imagens conforme necessário
];


const ImageGallery = ({ visible, onClose, onSelectImage }: ImageGalleryProps) => {
    const handleSelectImage = (image: any) => {
        const imageUri = Image.resolveAssetSource(image).uri; // Converta o require para URI
        onSelectImage(imageUri); // Passe o URI da imagem
    };

    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity onPress={() => handleSelectImage(item)} style={Styles.imageGalleryItem}>
            <Image source={item} style={Styles.image} />
        </TouchableOpacity>
    );

    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={Styles.modalContainer}>
                <Text style={Styles.title}>{I18n.t('Select_a_Frame')}</Text>
                <FlatList
                    data={images}
                    numColumns={2} // Número de colunas ajustado para 2
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                />
                <TouchableOpacity onPress={onClose} style={Styles.closeButton}>
                    <Text style={Styles.closeButtonText}>{I18n.t('Close')}</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default ImageGallery;