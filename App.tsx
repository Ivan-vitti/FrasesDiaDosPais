/** npx react-native start --reset-cache
 * adb reverse tcp:8081 tcp:8081
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import I18n from './src/util/i18n';
import PremiumScreen from './src/screens/PremiumScreen';
import HelpScreen from './src/screens/HelpScreen';
import { StatusBar, } from 'react-native';
import GlobalStyles, { colors } from './src/Styles/GlobalStyles';
import NavigationBarColor from 'react-native-navigation-bar-color';
import PhrasesScreen from './src/screens/PhrasesScreen';
import ShareScreen from './src/screens/ShareScreen';
import {withIAPContext} from 'react-native-iap';

//--------------------------------------------------------------------------------------------------------------------
const renderTabIcon = (name: string, color: string) => {
  return <Icon name={name} color={color} size={26} />
};
//--------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen}
        options={{
          title: I18n.t('home'),
          headerStyle: {
            backgroundColor: GlobalStyles.body.backgroundColor,
          },
          headerTintColor: GlobalStyles.body.color,
          headerTitleStyle: {
            fontFamily: GlobalStyles.body.fontFamily,
            fontSize: GlobalStyles.body.fontSize,
            fontWeight: GlobalStyles.body.fontWeight,
          },
        }}
      />
      <HomeStack.Screen name="Share" component={ShareScreen}
        options={{
          title: I18n.t('share'),
          headerStyle: {
            backgroundColor: GlobalStyles.body.backgroundColor,
          },
          headerTintColor: GlobalStyles.body.color,
          headerTitleStyle: {
            fontFamily: GlobalStyles.body.fontFamily,
            fontSize: GlobalStyles.body.fontSize,
            fontWeight: GlobalStyles.body.fontWeight,
          },
        }}
      />
    </HomeStack.Navigator>
  );
}
//--------------------------------------------------------------------------------------------------------------------
const PhrasesStack = createNativeStackNavigator();
function PhraseStackScreen() {
  return (
    <PhrasesStack.Navigator>
      <PhrasesStack.Screen name="phrases" component={PhrasesScreen}
        options={{
          title: I18n.t('phrases'),
          headerStyle: {
            backgroundColor: GlobalStyles.body.backgroundColor,
          },
          headerTintColor: GlobalStyles.body.color,
          headerTitleStyle: {
            fontFamily: GlobalStyles.body.fontFamily,
            fontSize: GlobalStyles.body.fontSize,
            fontWeight: GlobalStyles.body.fontWeight,
          },
        }}
      />
      <PhrasesStack.Screen name="Share" component={ShareScreen}
        options={{
          title: I18n.t('share'),
          headerStyle: {
            backgroundColor: GlobalStyles.body.backgroundColor,
          },
          headerTintColor: GlobalStyles.body.color,
          headerTitleStyle: {
            fontFamily: GlobalStyles.body.fontFamily,
            fontSize: GlobalStyles.body.fontSize,
            fontWeight: GlobalStyles.body.fontWeight,
          },
        }}
      />
    </PhrasesStack.Navigator>
  );
}
//--------------------------------------------------------------------------------------------------------------------
const PremiumStack = createNativeStackNavigator();
function PremiumStackScreen() {
  return (
    <PremiumStack.Navigator>
      <PremiumStack.Screen name="Premium" component={PremiumScreen}
        options={{
          title: I18n.t('premium'),
          headerStyle: {
            backgroundColor: GlobalStyles.body.backgroundColor,
          },
          headerTintColor: GlobalStyles.body.color,
          headerTitleStyle: {
            fontFamily: GlobalStyles.body.fontFamily,
            fontSize: GlobalStyles.body.fontSize,
            fontWeight: GlobalStyles.body.fontWeight,
          },
        }}
      />
    </PremiumStack.Navigator>
  );
}
//--------------------------------------------------------------------------------------------------------------------
const HelpStack = createNativeStackNavigator();
function HelpStackScreen() {
  return (
    <HelpStack.Navigator>
      <HelpStack.Screen name="Help" component={HelpScreen}
        options={{
          title: I18n.t('help'),
          headerStyle: {
            backgroundColor: GlobalStyles.body.backgroundColor,
          },
          headerTintColor: GlobalStyles.body.color,
          headerTitleStyle: {
            fontFamily: GlobalStyles.body.fontFamily,
            fontSize: GlobalStyles.body.fontSize,
            fontWeight: GlobalStyles.body.fontWeight,
          },
        }}
      />
    </HelpStack.Navigator>
  );
}
//--------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------

function App(): React.JSX.Element {
  // Função para mudar a cor da barra de navegação
  const changeNavigationBarColor = (color: string) => {
    NavigationBarColor(color, true); // O segundo argumento define se o ícone será claro ou escuro
  };
  // useEffect para mudar a cor da barra de navegação quando o app iniciar
  useEffect(() => {
    changeNavigationBarColor(colors.background); //  // Azul Muito Claro (fundo)
  }, []);

  return (
    <>
      {/* Define a cor de fundo e o estilo da barra de status (no topo da tela) */}
      <StatusBar backgroundColor={GlobalStyles.body.backgroundColor} barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: GlobalStyles.iconMediumActive.color,
          tabBarInactiveTintColor: GlobalStyles.iconMedium.color,
          tabBarStyle: { backgroundColor: GlobalStyles.body.backgroundColor },
          tabBarLabelStyle: GlobalStyles.legend,

        }}>
          <Tab.Screen name="HomeStack" component={HomeStackScreen} options={{ title: I18n.t('phrases_of_day'), tabBarIcon: ({ color }) => renderTabIcon('user-tie', color) }}
          />
          <Tab.Screen name="PhrasesStack" component={PhraseStackScreen} options={{ title: I18n.t('phrases'), tabBarIcon: ({ color }) => renderTabIcon('clipboard-list', color) }}
          />
          <Tab.Screen name="PremiumStack" component={PremiumStackScreen} options={{ title: I18n.t('premium'), tabBarIcon: ({ color }) => renderTabIcon('star', color) }}
          />
          <Tab.Screen name="HelpStack" component={HelpStackScreen} options={{ title: I18n.t('help'), tabBarIcon: ({ color }) => renderTabIcon('question-circle', color) }}
          />

        </Tab.Navigator>
      </NavigationContainer>

    </>
  );
}

export default withIAPContext(App);
