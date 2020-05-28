import React from 'react';
import { Button } from 'react-native';

import { Routes, PropsWithNavigation } from '../../routes';

import { View, Text } from './index.styled';

interface SummonerProps {}

type Props = PropsWithNavigation<SummonerProps, Routes.SUMMONER>;

const Summoner = ({ route, navigation }: Props) => {
  const handlePress = () => {
    navigation.goBack();
  }

  return (
    <View>
      <Text>{route.params.summonerName}</Text>
      <Button title="Home" onPress={handlePress} />
    </View>
  );
}

export default Summoner;
