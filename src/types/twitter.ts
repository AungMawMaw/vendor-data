export interface Coordinate {
  lat: number;
  long: number;
}
export interface Geotag {
  id: string;
  name: string;
  place_type: string;
  full_name: string;
  country: string;
  country_code: string;
  coordinates: Coordinate;
}
export interface Tweet {
  id: string;
  user_id: string;
  user_name: string;
  text: string;
  date: string;
  geo: Geotag;
}

export interface Vendor {
  name: string;
  image: string;
  description: string;
  twitter_id: string;
  tweets: string;
  created: string;
  updated: string;
}
