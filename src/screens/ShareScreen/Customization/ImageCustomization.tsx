import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import Styles from '../ShareScreen.style';

interface ImageCustomizationProps {
    imageUri: string | null;
    phrase: string;
    backgroundColor: string; // Adicione esta linha
}


const ImageCustomization: React.FC<ImageCustomizationProps> = ({ imageUri, phrase, backgroundColor }) => {
    console.log('Selected Image URI:', imageUri);

    return (
        <View style={[Styles.boxPhrase, { backgroundColor }]}>
            <ImageBackground
                source={imageUri ? { uri: imageUri } : require('../../../assets/images/Moldura.png')}
                style={Styles.imageBackground}
                imageStyle={Styles.image}
            >
                <View style={Styles.textContainer}>
                    <Text style={Styles.subtitle}>
                        {phrase.split(' ').length > 5 ? (
                            <>
                                {phrase.split(' ').slice(0, 5).join(' ')}
                                {'\n'}
                                {phrase.split(' ').slice(5).join(' ')}
                            </>
                        ) : (
                            phrase
                        )}
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};

export default ImageCustomization;