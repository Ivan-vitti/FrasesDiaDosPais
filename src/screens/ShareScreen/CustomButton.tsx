// src/components/CustomButton.tsx
import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles, { colors } from './ShareScreen.style';

interface CustomButtonProps {
    iconName: string;
    title: string;
    onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ iconName, title, onPress }) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <TouchableOpacity
            style={[Styles.buttonPrimary, isPressed && { backgroundColor: colors.secondary }]}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={onPress}
            activeOpacity={0.7} // Diminui a opacidade ao pressionar
        >
            <Icon name={iconName} size={28} color={colors.iconColorBotão} />
            <Text style={Styles.buttonTextPrimary}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
