/** npx react-native start --reset-cache
 * adb reverse tcp:8081 tcp:8081
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import I18n from './src/util/i18n';
import PremiumScreen from './src/screens/PremiumScreen';
import HelpScreen from './src/screens/HelpScreen';

//--------------------------------------------------------------------------------------------------------------------
const renderTabIcon = (name: string, color: string) => {
  return <Icon name={name} color={color} size={25} />
};
//--------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details=Detalhes" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}
//--------------------------------------------------------------------------------------------------------------------
const SettingsStack = createNativeStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details=Detalhes" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}
//--------------------------------------------------------------------------------------------------------------------
const PremiumStack = createNativeStackNavigator();
function PremiumStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Premium" component={PremiumScreen} />
    </SettingsStack.Navigator>
  );
}
//--------------------------------------------------------------------------------------------------------------------
const HelpStack = createNativeStackNavigator();
function HelpStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Help" component={HelpScreen} />
    </SettingsStack.Navigator>
  );
}
//--------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeStack" component={HomeStackScreen} options={{ title: I18n.t('Fathers_Day_Phrases'), tabBarIcon: ({ color }) => renderTabIcon('user-tie', color) }}
        />
        <Tab.Screen name="SettingsStack" component={SettingsStackScreen} options={{ title: I18n.t('settings'), tabBarIcon: ({ color }) => renderTabIcon('user-cog', color) }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
