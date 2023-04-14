export interface IUser {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  picture: Picture;
}

interface Name {
  first: string;
  last: string;
}

interface Location {
  city: string;
  state: string;
  country: string;
}

interface Login {
  username: string;
}

interface Dob {
  age: number;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
