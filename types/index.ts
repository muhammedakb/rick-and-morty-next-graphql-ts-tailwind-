export interface Location {
  __typename: string;
  name: string;
  type: string;
}

export interface Character {
  __typename: string;
  image: string;
  id: string;
  location: Location;
  name: string;
  status: string;
  gender: string;
}

export interface Characters {
  __typename: string;
  results: Character[];
}

export interface CharactersResponse {
  characters: Characters;
}
