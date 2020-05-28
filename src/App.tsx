import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Platform } from 'react-native';


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


export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
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
  }
};
