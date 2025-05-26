export interface ProfileEntity {
  id: number;
  name: {
    first: string;
    last: string;
  };
  organization: string;
  jobTitle: string;
  biography: string;
  avatar: string;
  address: {
    country: string;
    region: string;
    district: string;
    place: string;
    locality: string;
    neighborhood: string;
    street: string;
    postcode: string;
    number: string;
    complement: string;
    geolocation: {
      latitude: number;
      longitude: number;
    };
  };
  document: {
    personal: {
      type: string;
      value: string;
    };
    professional: {
      type: string;
      value: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}
