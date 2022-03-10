import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  fetchSummoner: Summoner;
};


export type QueryFetchSummonerArgs = {
  name: Scalars['String'];
  region: Scalars['String'];
};

export type Summoner = {
  __typename?: 'Summoner';
  id: Scalars['String'];
  accountId: Scalars['String'];
  puuid: Scalars['String'];
  name: Scalars['String'];
  profileIconId: Scalars['Float'];
  revisionDate: Scalars['Float'];
  summonerLevel: Scalars['Float'];
  region: Scalars['String'];
  ranked: Array<LeagueEntry>;
  matchList: MatchList;
};

export type LeagueEntry = {
  __typename?: 'LeagueEntry';
  leagueId: Scalars['String'];
  summonerId: Scalars['String'];
  summonerName: Scalars['String'];
  queueType: Scalars['String'];
  tier: Scalars['String'];
  rank: Scalars['String'];
  leaguePoints: Scalars['Float'];
  wins: Scalars['Float'];
  losses: Scalars['Float'];
  hotStreak: Scalars['Boolean'];
  veteran: Scalars['Boolean'];
  freshBlood: Scalars['Boolean'];
  inactive: Scalars['Boolean'];
};

export type MatchList = {
  __typename?: 'MatchList';
  startIndex: Scalars['Float'];
  totalGames: Scalars['Float'];
  endIndex: Scalars['Float'];
  matches: Array<MatchReference>;
};

export type MatchReference = {
  __typename?: 'MatchReference';
  gameId: Scalars['Float'];
  gameDetails: Match;
  role: Scalars['String'];
  season: Scalars['Float'];
  platformId: Scalars['String'];
  champion: Scalars['Float'];
  championDetails?: Maybe<Champion>;
  queue: Scalars['Float'];
  queueDetails?: Maybe<Queue>;
  lane: Scalars['String'];
  timestamp: Scalars['Float'];
  region: Scalars['String'];
};

export type Match = {
  __typename?: 'Match';
  gameId: Scalars['Float'];
  participants: Array<Participant>;
  participantIdentities: Array<ParticipantIdentity>;
  queueId: Scalars['Float'];
  gameType: Scalars['String'];
  gameDuration: Scalars['Float'];
  teams: Array<TeamStats>;
  platformId: Scalars['String'];
  gameCreation: Scalars['Float'];
  seasonId: Scalars['Float'];
  gameVersion: Scalars['String'];
  mapId: Scalars['Float'];
  gameMode: Scalars['String'];
};

export type Participant = {
  __typename?: 'Participant';
  participantId: Scalars['Float'];
  championId: Scalars['Float'];
  stats: ParticipantStats;
  teamId: Scalars['Float'];
  spell1Id: Scalars['Float'];
  spell2Id: Scalars['Float'];
  highestAchievedSeasonTier: Scalars['String'];
};

export type ParticipantStats = {
  __typename?: 'ParticipantStats';
  win: Scalars['Boolean'];
  kills: Scalars['Float'];
  deaths: Scalars['Float'];
  assists: Scalars['Float'];
  item0: Scalars['Float'];
  item1: Scalars['Float'];
  item2: Scalars['Float'];
  item3: Scalars['Float'];
  item4: Scalars['Float'];
  item5: Scalars['Float'];
  item6: Scalars['Float'];
  goldEarned: Scalars['Float'];
  totalDamageTaken: Scalars['Float'];
  firstTowerKill: Scalars['Boolean'];
  wardsPlaced: Scalars['Float'];
  totalMinionsKilled: Scalars['Float'];
  firstTowerAssist: Scalars['Boolean'];
  participantId: Scalars['Float'];
  firstBloodAssist: Scalars['Boolean'];
  damageDealtToTurrets: Scalars['Float'];
  firstBloodKill: Scalars['Boolean'];
  sightWardsBoughtInGame: Scalars['Float'];
  perk0: Scalars['Float'];
  perk1: Scalars['Float'];
  perk2: Scalars['Float'];
  perk3: Scalars['Float'];
  perk4: Scalars['Float'];
  perk5: Scalars['Float'];
  perkPrimaryStyle: Scalars['Float'];
  perkSubStyle: Scalars['Float'];
};

export type ParticipantIdentity = {
  __typename?: 'ParticipantIdentity';
  participantId: Scalars['Float'];
  player: Player;
};

export type Player = {
  __typename?: 'Player';
  profileIcon: Scalars['Float'];
  accountId: Scalars['String'];
  matchHistoryUri: Scalars['String'];
  currentAccountId: Scalars['String'];
  currentPlatformId: Scalars['String'];
  summonerName: Scalars['String'];
  summonerId: Scalars['String'];
  platformId: Scalars['String'];
};

export type TeamStats = {
  __typename?: 'TeamStats';
  towerKills: Scalars['Float'];
  riftHeraldKills: Scalars['Float'];
  firstBlood: Scalars['Boolean'];
  inhibitorKills: Scalars['Float'];
  firstBaron: Scalars['Boolean'];
  firstDragon: Scalars['Boolean'];
  dominionVictoryScore: Scalars['Float'];
  dragonKills: Scalars['Float'];
  baronKills: Scalars['Float'];
  firstInhibitor: Scalars['Boolean'];
  firstTower: Scalars['Boolean'];
  vilemawKills: Scalars['Float'];
  firstRiftHerald: Scalars['Boolean'];
  teamId: Scalars['Float'];
  win: Scalars['String'];
};

export type Champion = {
  __typename?: 'Champion';
  id: Scalars['String'];
  key: Scalars['String'];
};

export type Queue = {
  __typename?: 'Queue';
  queueId: Scalars['Float'];
  map: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type SummonerQueryVariables = {
  name: Scalars['String'];
  region: Scalars['String'];
};


export type SummonerQuery = (
  { __typename?: 'Query' }
  & { fetchSummoner: (
    { __typename?: 'Summoner' }
    & Pick<Summoner, 'name' | 'accountId' | 'id'>
  ) }
);


export const SummonerDocument = gql`
    query Summoner($name: String!, $region: String!) {
  fetchSummoner(name: $name, region: $region) {
    name
    accountId
    id
  }
}
    `;
export type SummonerComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SummonerQuery, SummonerQueryVariables>, 'query'> & ({ variables: SummonerQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SummonerComponent = (props: SummonerComponentProps) => (
      <ApolloReactComponents.Query<SummonerQuery, SummonerQueryVariables> query={SummonerDocument} {...props} />
    );
    
export type SummonerProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SummonerQuery, SummonerQueryVariables>
    } & TChildProps;
export function withSummoner<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SummonerQuery,
  SummonerQueryVariables,
  SummonerProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SummonerQuery, SummonerQueryVariables, SummonerProps<TChildProps, TDataName>>(SummonerDocument, {
      alias: 'summoner',
      ...operationOptions
    });
};
export type SummonerQueryResult = ApolloReactCommon.QueryResult<SummonerQuery, SummonerQueryVariables>;