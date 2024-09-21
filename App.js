import { StyleSheet, Text, View, } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import CommunityScreen from './src/screens/CommunityScreen';
import ChatScreen from './src/screens/ChatScreen';
import SettingScreen from './src/screens/SettingScreen';
import { UserProvider } from './src/common/UserProvider'; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export const UserContext = React.createContext();


const App = () => {

  return (
    <UserProvider>
    <NavigationContainer> 
      <Stack.Navigator initialRouteName='Auth'>
      {<Stack.Screen name="Auth" component={AuthLoadingScreen} /> }
      {<Stack.Screen name="Login" component={LoginScreen} /> }
      <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
  );
};
const HomeTabs = () => {
  return (
    <Tab.Navigator initialRouteName='HomeTab'>
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="CommunityTab" component={CommunityScreen} />
      <Tab.Screen name="ChatTab" component={ChatScreen} />
      <Tab.Screen name="SettingTab" component={SettingScreen} />
    </Tab.Navigator>
  );
};
export default App;

const styles = StyleSheet.create({});