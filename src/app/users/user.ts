
export class User implements User {
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  __v: number;

  constructor(
    id: number,
    email: string,
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    phone: string,
    geolocation: { lat: string; long: string },
    city: string,
    street: string,
    number: number,
    zipcode: string,
    __v: number
  ) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.password = password;
    this.name = { firstname, lastname };
    this.phone = phone;
    this.address = { geolocation: { lat: geolocation.lat, long: geolocation.long }, city, street, number, zipcode };
    this.__v = __v;
  }
}
