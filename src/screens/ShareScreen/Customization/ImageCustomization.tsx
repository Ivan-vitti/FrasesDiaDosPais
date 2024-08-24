import React from 'react';
import { ImageBackground, Text, View, ViewStyle } from 'react-native';
import Styles from '../ShareScreen.style';



interface ImageCustomizationProps {
    imageUri: string | null;  // URI da imagem selecionada
    phrase: string;           // Frase a ser exibida
    backgroundColor: string;  // Cor de fundo escolhida
    fontColor: string;        // Cor da fonte escolhida
    fontFamily: string;       // Fonte escolhida
    fontSize: number;         // Tamanho da fonte escolhida
    alignment: 'horizontal' | 'vertical' | 'left' | 'center' | 'right' | 'top' | 'bottom'; // Alinhamento
}

const ImageCustomization: React.FC<ImageCustomizationProps> = ({
    imageUri,
    phrase,
    backgroundColor,
    fontColor,
    fontFamily,
    fontSize,
    alignment,
}) => {

    console.log('Selected Image URI:', imageUri);
    console.log('Selected Font - fonte selecionadaaaa:', fontFamily); // Log da fonte selecionada

    // Verifica se a cor de fundo foi escolhida (não é branco) e se não há imagem
    const isColorSelected = backgroundColor !== '#FFFFFF'; // Define o que é considerado a cor padrão (branco)
    const showColorBox = isColorSelected && !imageUri; // Se a cor foi escolhida e não há imagem

    // Determina o alinhamento do texto
    const alignmentStyle: ViewStyle = {
        alignItems: 
            alignment === 'horizontal' || alignment === 'center' 
                ? 'center' 
                : alignment === 'left' 
                    ? 'flex-start' 
                    : alignment === 'right' 
                        ? 'flex-end' 
                        : 'center',
        justifyContent: 
            alignment === 'vertical' || alignment === 'center' 
                ? 'center' 
                : alignment === 'top' 
                    ? 'flex-start' 
                    : alignment === 'bottom' 
                        ? 'flex-end' 
                        : 'center',
    };

    return (
        <View style={[Styles.boxPhrase01, { backgroundColor }]}>
            {showColorBox ? (
                <View style={[Styles.boxPhrase, { backgroundColor }, alignmentStyle]}>
                    <View style={Styles.textContainer01}>
                        <Text style={[Styles.subtitle, { color: fontColor, fontFamily: fontFamily || 'Arial', fontSize }]}>
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
                </View>
            ) : (
                <ImageBackground
                    source={imageUri ? { uri: imageUri } : require('../../../assets/images/Moldura.png')} // Mostra a imagem ou a padrão
                    style={[Styles.boxPhrase, Styles.imageBackground]} // Combina os estilos de boxPhrase e imageBackground
                    imageStyle={Styles.image} // Estilo da imagem
                >
                    <View style={[Styles.textContainer, alignmentStyle]}>
                        <Text style={[Styles.subtitle, { color: fontColor, fontFamily: fontFamily || 'Arial', fontSize }]}>
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
            )}
        </View>
    );
};

export default ImageCustomization;