
import { View, Text } from 'react-native';
import I18n from '../../util/i18n';
import Styles, { colors } from './ShareScreen.style';
import React, { useEffect, useRef, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import Share from 'react-native-share';
import { AdEventType, BannerAd, BannerAdSize, InterstitialAd, } from 'react-native-google-mobile-ads';
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from './CustomButton';
import ImageCustomization from './Customization/ImageCustomization';
import CustomizationScreen from './Customization/CustomizationScreen';
import ViewShot, { captureRef } from 'react-native-view-shot'; // Adicionei a importação do ViewShot
import ImageGallery from './Customization/ImageGallery';
import EditPhrase from './EditPhrase'; // Importar o novo modal



const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-8667301238982350/4109936984');


const ShareScreen = ({ navigation }) => {
    const [isGalleryVisible, setGalleryVisible] = useState(false);
    const [imageUri, setImageUri] = useState<string | null>(null);
    const [isCustomizationVisible, setCustomizationVisible] = useState(false);
    const [premium, setPremium] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Novo estado para a cor de fundo
    const bannerRef = useRef<BannerAd>(null);
    const route = useRoute();
    const phrase = route.params?.phrase;
    const [loaded, setLoaded] = useState(false);
    const viewShotRef = useRef(null);
    const [isEditModalVisible, setEditModalVisible] = useState(false);
    const [editedPhrase, setEditedPhrase] = useState<string | null>(null);
    const [fontColor, setFontColor] = useState<string>('#000000'); // Novo estado para a cor da fonte
    const [selectedFont, setSelectedFont] = useState('Arial');
    const [fontSize, setFontSize] = useState(25); // Novo estado para o tamanho da fonte

    const [alignment, setAlignment] = useState<'horizontal' | 'vertical' | 'left' | 'center' | 'right' | 'top' | 'bottom'>('horizontal');



    useEffect(() => {

        // Verifica se o usuario é premium
        const checkPremium = async () => {
            const premium = await AsyncStorage.getItem('premium');
            if (premium === 'S') {
                setPremium(true);
            }
        }
        checkPremium();

        const onAdLoaded = () => {
            setLoaded(true);
            console.log('Interstitial ad loaded So Vaiiiiiii');
        };

        const onAdFailedToLoad = (error: any) => {
            console.error('Interstitial ad failed to load DEU RUImmmmmm: ', error);
        };

        const onAdClosed = () => {
            shareFinish();
        };

        const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, onAdLoaded);
        const unsubscribeFailed = interstitial.addAdEventListener(AdEventType.ERROR, onAdFailedToLoad);
        const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, onAdClosed);

        // Inicia o carregamento do intersticial
        interstitial.load();

        // Desinscreve os ouvintes ao desmontar o componente
        return () => {
            unsubscribeLoaded();
            unsubscribeFailed();
            unsubscribeClosed();
        };
    }, []);

    const handleFontConfirm = (fontName: string) => {
        console.log("Fonte confirmada:", fontName);
        setSelectedFont(fontName);
    };

    //-----------------------------------------------------------------------------------------------------------------

    const share = () => {
        // Remove a lógica para mostrar o anúncio intersticial ao compartilhar texto
        if (loaded && !premium) {
            // Verifica se o anúncio está carregado antes de tentar mostrá-lo
            if (interstitial.loaded) {
                interstitial.show(); // Aguarda a exibição do anúncio

                // Aguarda até que o anúncio seja fechado
                const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, async () => {
                    // Compartilha o texto após o anúncio ser fechado
                    const message = editedPhrase ? editedPhrase : I18n.t(phrase);
                    await Share.open({ message: message });
                    unsubscribeClosed(); // Remove o listener após ser usado
                    interstitial.load(); // Recarrega o anúncio após ser exibido
                });
            } else {
                console.error('Interstitial ad not loaded');
                // Compartilha o texto diretamente se o anúncio não estiver carregado
                const message = editedPhrase ? editedPhrase : I18n.t(phrase);
                Share.open({ message: message });
            }
        } else {
            // Compartilha o texto diretamente se o usuário for premium
            const message = editedPhrase ? editedPhrase : I18n.t(phrase);
            Share.open({ message: message });
        }
    };

    //-----------------------------------------------------------------------------------------------------------------

    const shareFinish = () => {
        const message = editedPhrase ? editedPhrase : I18n.t(phrase);

        Share.open({
            message: message,
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                err && console.log(err);
            });
    };

    //-----------------------------------------------------------------------------------------------------------------------------------

    const shareImage = async () => {
        try {
            const uri = await captureRef(viewShotRef, {
                format: 'jpg',
                quality: 0.8,
            });

            if (loaded && !premium) {
                // Verifica se o anúncio está carregado antes de tentar mostrá-lo
                if (interstitial.loaded) {
                    await interstitial.show(); // Aguarda a exibição do anúncio

                    // Aguarda até que o anúncio seja fechado
                    const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, async () => {
                        // Compartilha a imagem após o anúncio ser fechado
                        await Share.open({
                            url: uri,
                            //    message: I18n.t(phrase), // Para compartilhar a frase junto com a imagem 
                        });
                        unsubscribeClosed(); // Remove o listener após ser usado
                        interstitial.load(); // Recarrega o anúncio após ser exibido
                    });
                } else {
                    console.error('Interstitial ad not loaded');
                    // Compartilha a imagem diretamente se o anúncio não estiver carregado
                    await Share.open({
                        url: uri,
                        //    message: I18n.t(phrase), // Para compartilhar a frase junto com a imagem 
                    });
                }
            } else {
                // Compartilha a imagem diretamente se o usuário for premium
                await Share.open({
                    url: uri,
                    //    message: I18n.t(phrase), // Para compartilhar a frase junto com a imagem 
                });
            }
        } catch (error) {
            console.error('Error capturing and sharing image:', error);
        }
    };

    //---------------------------------------------------------------------------------------------------------------------

    const handleCloseCustomization = () => {
        setCustomizationVisible(false);
    };

    const handleOpenGallery = () => { // Função para abrir a galeria
        setGalleryVisible(true);
    };

    //---------------------------------------------------------------------------------------------------------------------

    // Função atualizada para lidar com a seleção de imagem
    const handleSelectImage = (selectedImageUri: string | null) => {
        if (selectedImageUri) {
            setImageUri(selectedImageUri); // Atualiza a moldura selecionada
            setBackgroundColor(''); // Redefine ou mantenha o estado de cor de fundo
        } else {
            setBackgroundColor('defaultColor'); // Se desejar manter uma cor de fundo padrão
        }
        setGalleryVisible(false); // Fecha a galeria
        handleCloseCustomization(); // Fecha o modal de personalização
    };

    //---------------------------------------------------------------------------------------------------------------------

    const handleSaveEditedPhrase = (newPhrase: string) => {
        // ALTERAÇÃO AQUI: Salve a nova frase editada
        setEditedPhrase(newPhrase);
    };

    //---------------------------------------------------------------------------------------------------------------------

    const handleColorConfirm = (color: string, target: 'background' | 'font') => {
        if (target === 'background') {
            setBackgroundColor(color); // Atualiza a cor de fundo
            setImageUri(null); // Remove a moldura anterior, se necessário
        } else if (target === 'font') {
            setFontColor(color); // Atualiza a cor da fonte
        }
        //   handleCloseCustomization(); // Fecha o modal de personalização
    };

    //---------------------------------------------------------------------------------------------------------------------
    const handleAlignmentConfirm = (alignment: 'horizontal' | 'vertical' | 'left' | 'center' | 'right' | 'top' | 'bottom') => {
        setAlignment(alignment);
    };
    
    
    //---------------------------------------------------------------------------------------------------------------------

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <View style={[Styles.container]}>
                <ViewShot ref={viewShotRef} options={{ format: 'jpg', quality: 0.9 }}>
                    <ImageCustomization
                        imageUri={imageUri}
                        phrase={editedPhrase ? editedPhrase : (phrase ? I18n.t(phrase) : 'Frase não disponível')}
                        backgroundColor={backgroundColor}
                        fontColor={fontColor}
                        fontFamily={selectedFont}
                        fontSize={fontSize} // Passando o tamanho da fonte aqui
                        alignment={alignment}
                    />

                </ViewShot>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 10 }}>
                <CustomButton
                    iconName="image"
                    title={I18n.t('Share_Image')}
                    onPress={shareImage}
                />
                <CustomButton
                    iconName="share-alt-square"
                    title={I18n.t('Share_Text')}
                    onPress={share}
                />

                <CustomButton
                    iconName="pencil"
                    title={I18n.t('Edit_the_Phrase')}
                    onPress={() => setEditModalVisible(true)} // Abre o modal de edição
                />

                <CustomButton
                    iconName="edit"
                    title={I18n.t('personalize')}
                    onPress={() => setCustomizationVisible(true)} // Abre o modal de personalização
                />
            </View>

            <View>
                {!premium ?
                    <BannerAd
                        ref={bannerRef}
                        unitId='ca-app-pub-8667301238982350/7038765928'
                        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                        onAdLoaded={() => {
                            console.log('Ad loaded');
                        }}
                        onAdFailedToLoad={(error) => {
                            console.error('Ad failed to load: ', error);
                        }}
                    />
                    : null}
            </View>

            <CustomizationScreen
                visible={isCustomizationVisible}
                onClose={handleCloseCustomization}
                onOpenGallery={handleOpenGallery}
                onImageSelected={handleSelectImage}
                onColorConfirm={(color) => handleColorConfirm(color, 'background')} // Para a cor de fundo
                onFontColorConfirm={(color) => handleColorConfirm(color, 'font')} // Para a cor da fonte
                onFontConfirm={handleFontConfirm}
                onFontSizeChange={setFontSize}  // Passa a função de atualização de tamanho da fonte
                onAlignmentConfirm={handleAlignmentConfirm}
                alignment={alignment} 
            />

            <ImageGallery
                visible={isGalleryVisible}
                onClose={() => setGalleryVisible(false)}
                onSelectImage={handleSelectImage} // Passa a função que será chamada quando a imagem for selecionada
            />

            <EditPhrase
                visible={isEditModalVisible}
                phrase={editedPhrase ? editedPhrase : (phrase ? I18n.t(phrase) : 'Frase não disponível')}
                onClose={() => setEditModalVisible(false)}
                onSave={handleSaveEditedPhrase}
            />
        </View>
    );
};

export default ShareScreen;