import React from 'react';
import { Modal, View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import Styles from './ShareScreen.style'; // Importando os estilos do ShareScreen

interface ImageGalleryProps {
    visible: boolean;
    onClose: () => void;
    onSelectImage: (imageUri: string) => void; // Imagem como URI
}


const images = [
    require('../../assets/images/Moldura.png'),
    require('../../assets/images/Moldura02.jpg'),
    require('../../assets/images/Moldura03.jpg'),
    require('../../assets/images/Moldura04.jpg'),
    require('../../assets/images/Moldura05.png'),
    require('../../assets/images/Moldura06.jpg'),
    require('../../assets/images/Moldura07.png'),
    require('../../assets/images/Moldura08.png'),
    require('../../assets/images/Moldura09.png'),
    require('../../assets/images/Moldura10.png'),
    require('../../assets/images/Moldura11.png'),
    require('../../assets/images/Moldura12.jpg'),
    require('../../assets/images/Moldura13.jpg'),
    require('../../assets/images/Moldura14.jpg'),
    require('../../assets/images/Moldura15.jpg'),
    require('../../assets/images/Moldura16.png'),
    // Adicione mais imagens conforme necessário
];


const ImageGallery = ({ visible, onClose, onSelectImage }: ImageGalleryProps) => {
    const handleSelectImage = (image: any) => {
        const imageUri = Image.resolveAssetSource(image).uri; // Converta o require para URI
        onSelectImage(imageUri); // Passe o URI da imagem
    };

    return (
        <Modal visible={visible} animationType="slide" transparent={false}>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={images}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleSelectImage(item)}>
                            <Image source={item} style={{ width: '100%', height: 200 }} />
                        </TouchableOpacity>
                    )}
                />
                <TouchableOpacity onPress={onClose} style={{ padding: 20 }}>
                    <Text>Fechar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default ImageGallery;