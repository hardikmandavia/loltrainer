import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import reducer from './store';

import Home from './components/Home';
import Summoner from './components/Summoner';

import { Container } from './App.styled';

import { Routes, RootStackParamList } from './routes';

declare const global: { HermesInternal: null | {} };

const Stack = createStackNavigator<RootStackParamList>();
const { Navigator, Screen } = Stack;

const store = createStore(reducer, applyMiddleware(thunk));

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
