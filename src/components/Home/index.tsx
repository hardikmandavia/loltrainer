import React from 'react';
import { Button } from 'react-native';

import { Input, View } from './index.styled';

interface Props {
  name: string;
  onNameChange: (value: string) => void;
  onSearchPress: () => void;
};

const Home = ({ name, onNameChange, onSearchPress }: Props) => {
  console.log("HERE", name);
  return (
    <View>
      <Input value={name} onChangeText={onNameChange}/>
      <Button title="Search" onPress={onSearchPress} />
    </View>
  );
}

export default Home;
