import { View, Text, Button } from "react-native";


const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen = Tela Inicial</Text>
            <Button
                title="Go to Details =Vai para detalhes"
                onPress={() => navigation.navigate('Details=Detalhes')}
            />
        </View>
    );
}

export default HomeScreen;