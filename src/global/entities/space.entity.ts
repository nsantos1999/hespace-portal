import { EquipmentEnum } from '../constants/enums/equipment.enum';
import { AddressEntity } from './address.entity';
import { ContactEntity } from './contact.entity';
import { PhotoEntity } from './photo.entity';
import { PriceEntity } from './price.entity';

export interface SpaceEntity {
  address: AddressEntity;
  contacts: Array<ContactEntity>;
  createdAt: string;
  description: string | null;
  equipments: Array<EquipmentEnum>;
  favorite: boolean;
  identifier: number;
  photos: Array<PhotoEntity>;
  price: PriceEntity;
  title: string;
  updatedAt: string | null;

  // Provisorio
  startDate: string;
  endDate: string;
}
