import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import Home from './components/Home';
import Summoner from './components/Summoner';

import { Container } from './App.styled';

import { Routes, RootStackParamList } from './routes';

declare const global: { HermesInternal: null | {} };

const Stack = createStackNavigator<RootStackParamList>();
const { Navigator, Screen } = Stack;

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Container>
        <Navigator headerMode="none">
          <Screen name={Routes.HOME} component={Home} />
          <Screen name={Routes.SUMMONER} component={Summoner} />
        </Navigator>
      </Container>
    </NavigationContainer>
  );
};

export default App;
