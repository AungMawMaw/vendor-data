export interface Coordinate {
  lat: number;
  long: number;
}
export interface Geotag {
  id: string;
  name: string;
  placeType: string;
  fullName: string;
  country: string;
  country_code: string;
  coordinates: Coordinate;
}
export interface Tweet {
  id: string;
  userId: string;
  userName: string;
  text: string;
  date: string;
  geo: Geotag;
}

export interface Vendor {
  name: string;
  image: string;
  description: string;
  twitterId: string;
  tweets: Tweet[];
  created: number;
  updated: number;
}
