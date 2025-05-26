import { ContactTypeEnum } from '../constants/enums/contact-type.enum';

export interface ContactEntity {
  createdAt: string;
  identifier: number;
  type: ContactTypeEnum;
  updatedAt: string | null;
  value: string;
}
