import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles, { colors } from './Customization.style';

const CustomizationScreen = ({ visible, onClose }) => {
    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={Styles.FundoBackground}>
                <View style={Styles.modalContainer}>
                    <Text style={Styles.Title}>Imagem de Fundo</Text>
                    <View style={Styles.DireçãoRow}>
                        <TouchableOpacity style={Styles.modalButton}>
                            <Icon name="image" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>Galeria</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.modalButton}>
                            <Icon name="tint" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>Cor</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.modalButton}>
                            <Icon name="camera" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>Câmera</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={Styles.Title}>Fonte</Text>
                    <View style={Styles.DireçãoRow}>
                        <TouchableOpacity style={Styles.modalButton}>
                            <Icon name="font" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>Fonte</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.modalButton}>
                            <Icon name="tint" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>Cor da Fonte</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.modalButton}>
                            <Icon name="text-height" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>Tamanho</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={Styles.Title}>Alinhamento</Text>
                    <View style={Styles.DireçãoRow}>
                        <TouchableOpacity style={Styles.modalButton}>
                            <Icon name="align-left" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>Horizontal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.modalButton}>
                            <Icon name="align-center" style={Styles.iconStyle} />
                            <Text style={Styles.subtitle}>Vertical</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={Styles.FecharButton} onPress={onClose}>
                        <Icon name="check" style={Styles.iconStyle} />
                        <Text style={Styles.subtitle}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default CustomizationScreen;
