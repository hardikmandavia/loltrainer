import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Button } from 'react-native';

import { Routes, PropsWithNavigation } from '../../routes';

import { View, Text } from './index.styled';

interface SummonerProps {}

type Props = PropsWithNavigation<SummonerProps, Routes.SUMMONER>;

export default function Summoner({ route, navigation }: Props) {
  // const { data, loading, error } = useQuery()
  const handlePress = () => {
    navigation.goBack();
  }

  return (
    <View>
      <Text>{route.params.summonerName}</Text>
      <Button title="Home" onPress={handlePress} />
    </View>
  );
};
