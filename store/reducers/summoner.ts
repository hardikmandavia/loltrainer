// Actions

export enum actionTypes {
  SEARCH_REQUEST = 'SUMMONER/SEARCH/REQUEST',
  SEARCH_SUCCESS = 'SUMMONER/SEARCH/SUCCESS',
  SEARCH_FAIL = 'SUMMONER/SEARCH/FAILED'
}

// Action Creators
export interface SearchRequest {
  type: actionTypes.SEARCH_REQUEST;
  summonerName: string;
}

export interface SearchSuccess {
  type: actionTypes.SEARCH_SUCCESS
  data: any;
}

export interface SearchFail {
  type: actionTypes.SEARCH_FAIL,
  error: string;
}

export type Action = SearchRequest | SearchSuccess | SearchFail;

export interface State {
  loading: boolean;
  summoner?: any;
  error?: string;
}

const initialState: State = {
  loading: false
}

// Reducer
export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case actionTypes.SEARCH_REQUEST:
      return { ...state, loading: true };
    case actionTypes.SEARCH_SUCCESS:
      return { ...state, loading: false, summoner: action.data };
    case actionTypes.SEARCH_FAIL:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

// side effects...thunks etc
export function getSummoner (summonerName: string) {
  return;
}


