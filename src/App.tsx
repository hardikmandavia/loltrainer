import 'react-native-gesture-handler';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import Config from 'react-native-config';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import Home from './containers/Home';
import Summoner from './components/Summoner';

import { Container } from './App.styled';

import { Routes, RootStackParamList } from './routes';

declare const global: { HermesInternal: null | {} };

const Stack = createStackNavigator<RootStackParamList>();
const { Navigator, Screen } = Stack;

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: Platform.select({
    ios: Config.API_ENDPOINT_IOS,
    android: Config.API_ENDPOINT_ANDROID
  })
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link
});

export function App() {
  useEffect(() => {
    console.log("APPP")
    SplashScreen.hide();
  }, []);

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Container>
          <Navigator headerMode="none">
            <Screen name={Routes.HOME} component={Home} />
            <Screen name={Routes.SUMMONER} component={Summoner} />
          </Navigator>
        </Container>
      </NavigationContainer>
    </ApolloProvider>
  );

};
