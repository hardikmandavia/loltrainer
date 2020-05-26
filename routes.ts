import { NavigationProp, RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  HOME: undefined;
  SUMMONER: {
    summonerName: string;
  };
}

export enum Routes {
  HOME = "HOME",
  SUMMONER = "SUMMONER"
}

export type PropsWithNavigation<T, Route extends Routes> = T & {
  route: RouteProp<RootStackParamList, Route>
  navigation: NavigationProp<RootStackParamList, Route>;
}
