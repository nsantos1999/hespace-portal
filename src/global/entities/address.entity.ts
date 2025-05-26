export interface AddressEntity {
  complement: string | null;
  coordinates: [number, number];
  country: string;
  createdAt: string;
  identifier: number;
  neighborhood: string;
  number: string;
  place: string;
  postcode: string;
  region: string;
  street: string;
  updatedAt: string | null;
}
