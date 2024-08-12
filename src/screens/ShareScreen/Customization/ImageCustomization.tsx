import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import Styles from '../ShareScreen.style';

interface ImageCustomizationProps {
    imageUri: string | null;  // URI da imagem selecionada
    phrase: string;           // Frase a ser exibida
    backgroundColor: string;  // Cor de fundo escolhida
    fontColor: string;        // Cor da fonte escolhida
}

const ImageCustomization: React.FC<ImageCustomizationProps> = ({ imageUri, phrase, backgroundColor, fontColor }) => {
    console.log('Selected Image URI:', imageUri);

    // Verifica se a cor de fundo foi escolhida (não é branco) e se não há imagem
    const isColorSelected = backgroundColor !== '#FFFFFF'; // Define o que é considerado a cor padrão (branco)
    const showColorBox = isColorSelected && !imageUri; // Se a cor foi escolhida e não há imagem

    return (
        <View style={[Styles.boxPhrase01, { backgroundColor }]}>
            {showColorBox ? ( // Se a cor foi escolhida, exibe apenas a cor de fundo e a frase
                <View style={[Styles.boxPhrase, { backgroundColor }]}>
                    <View style={Styles.textContainer01}>
                        <Text style={[Styles.subtitle, { color: fontColor }]}>
                            {phrase.split(' ').length > 5 ? ( // Divide a frase em partes se tiver mais de 5 palavras
                                <>
                                    {phrase.split(' ').slice(0, 5).join(' ')}
                                    {'\n'}
                                    {phrase.split(' ').slice(5).join(' ')}
                                </>
                            ) : (
                                phrase // Se não, exibe a frase completa
                            )}
                        </Text>
                    </View>
                </View>
            ) : (
                <ImageBackground
                    source={imageUri ? { uri: imageUri } : require('../../../assets/images/Moldura.png')} // Mostra a imagem ou a padrão
                    style={[Styles.boxPhrase, Styles.imageBackground]} // Combina os estilos de boxPhrase e imageBackground
                    imageStyle={Styles.image} // Estilo da imagem
                >
                    <View style={Styles.textContainer}>
                        <Text style={[Styles.subtitle, { color: fontColor }]}>
                            {phrase.split(' ').length > 5 ? ( // Divide a frase em partes se tiver mais de 5 palavras
                                <>
                                    {phrase.split(' ').slice(0, 5).join(' ')}
                                    {'\n'}
                                    {phrase.split(' ').slice(5).join(' ')}
                                </>
                            ) : (
                                phrase // Se não, exibe a frase completa
                            )}
                        </Text>
                    </View>
                </ImageBackground>
            )}
        </View>
    );
};

export default ImageCustomization;
