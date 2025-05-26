import { PeriodEnum } from '../constants/enums/period.enum';

export interface PriceEntity {
  createdAt: string;
  currency: string;
  identifier: number;
  period: PeriodEnum;
  updatedAt: string | null;
  value: number;
}
