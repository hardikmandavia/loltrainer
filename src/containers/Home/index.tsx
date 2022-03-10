import React, { useState } from 'react';

import { PropsWithNavigation, Routes } from '../../routes';

import HomeComponent from '../../components/Home';

type Props = PropsWithNavigation<{}, Routes.HOME>;

export default function HomeContainer({ navigation }: Props) {
  const [name, setName] = useState('');

  const handleNameChange = (value: string) => {
    console.log(value);
    setName(value);
  }

  const handleSearchPress = () => {
    navigation.navigate(Routes.SUMMONER, { summonerName: name });
  }

  return (
    <HomeComponent
      name={name}
      onNameChange={handleNameChange}
      onSearchPress={handleSearchPress}
    />
  );
}