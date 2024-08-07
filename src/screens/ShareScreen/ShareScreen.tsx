
import { View, Text } from 'react-native';
import I18n from '../../util/i18n';
import Styles, { colors } from './ShareScreen.style';
import React, { useEffect, useRef, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import Share from 'react-native-share';
import { AdEventType, BannerAd, BannerAdSize, InterstitialAd, } from 'react-native-google-mobile-ads';
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from './CustomButton';
import ImageCustomization from './ImageCustomization';
import CustomizationScreen from './CustomizationScreen';
import ViewShot, { captureRef } from 'react-native-view-shot'; // Adicionei a importação do ViewShot
import ImageGallery from './ImageGallery';
import EditPhrase from './EditPhrase'; // Importar o novo modal


const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-8667301238982350/4109936984');


const ShareScreen = ({ navigation }) => {

    const [isGalleryVisible, setGalleryVisible] = useState(false); // Novo estado para controlar a visibilidade da galeria

    const [imageUri, setImageUri] = useState<string | null>(null); // Inicializa como null
    const [isCustomizationVisible, setCustomizationVisible] = useState(false);
    const [premium, setPremium] = useState(false); // cria uma variavel que indique se é premium ou não
    const bannerRef = useRef<BannerAd>(null);
    const route = useRoute();
    const phrase = route.params?.phrase;
    const [loaded, setLoaded] = useState(false);
    const viewShotRef = useRef(null); // Adicionei a referência para ViewShot

    const [isEditModalVisible, setEditModalVisible] = useState(false); // Novo estado para controlar a visibilidade do modal de edição
    const [editedPhrase, setEditedPhrase] = useState<string | null>(null); // Estado para armazenar a frase editada temporariamente




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
        // ALTERAÇÃO AQUI: Use editedPhrase se disponível**
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
                            message: I18n.t(phrase),
                        });
                        unsubscribeClosed(); // Remove o listener após ser usado
                        interstitial.load(); // Recarrega o anúncio após ser exibido
                    });
                } else {
                    console.error('Interstitial ad not loaded');
                    // Compartilha a imagem diretamente se o anúncio não estiver carregado
                    await Share.open({
                        url: uri,
                        message: I18n.t(phrase),
                    });
                }
            } else {
                // Compartilha a imagem diretamente se o usuário for premium
                await Share.open({
                    url: uri,
                    message: I18n.t(phrase),
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


    // Função atualizada para lidar com a seleção de imagem
    const handleSelectImage = (selectedImageUri: string | null) => {
        if (selectedImageUri) {
            setImageUri(selectedImageUri); // Atualiza o estado com a imagem selecionada
        }
        setGalleryVisible(false); // Fecha a galeria
    };

    const handleSaveEditedPhrase = (newPhrase: string) => {
        // ALTERAÇÃO AQUI: Salve a nova frase editada
        setEditedPhrase(newPhrase);
    };




    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <View style={[Styles.container]}>
                <ViewShot ref={viewShotRef} options={{ format: 'jpg', quality: 0.9 }}>
                    <ImageCustomization
                        imageUri={imageUri}

                        phrase={editedPhrase ? editedPhrase : (phrase ? I18n.t(phrase) : 'Frase não disponível')}
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
                onOpenGallery={handleOpenGallery} // Passa a função para abrir a galeria
                onImageSelected={handleSelectImage}
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
