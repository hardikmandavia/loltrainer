import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import reducer from './src/store';

import Home from './src/components/Home';
import Summoner from './src/components/Summoner';

import { Container } from './App.styled';

import { Routes, RootStackParamList } from './src/routes';

declare const global: { HermesInternal: null | {} };

const Stack = createStackNavigator<RootStackParamList>();
const { Navigator, Screen } = Stack;

const client = axios.create({
  baseURL: '',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Container>
            <Navigator headerMode="none">
              <Screen name={Routes.HOME} component={Home} />
              <Screen name={Routes.SUMMONER} component={Summoner} />
            </Navigator>
          </Container>
        </NavigationContainer>
      </Provider>
    );
  }
};
