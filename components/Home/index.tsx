import React from 'react';
import { Button } from 'react-native';

import { Routes, PropsWithNavigation } from '../../routes';

import { View, Title } from './index.styled';

interface HomeProps {};

type Props = PropsWithNavigation<HomeProps, Routes.HOME>;

const Home = ({ navigation }: Props) => {
  const handlePress = () => {
    navigation.navigate(Routes.SUMMONER, { summonerName: 'sentaiyou'});
  }
  return (
    <View>
      <Title>This is the Home page</Title>
      <Button title="Search" onPress={handlePress} />
    </View>
  );
}

export default Home;
