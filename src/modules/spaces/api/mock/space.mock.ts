import { ContactTypeEnum } from '@/global/constants/enums/contact-type.enum';
import { EquipmentEnum } from '@/global/constants/enums/equipment.enum';
import { PeriodEnum } from '@/global/constants/enums/period.enum';
import { SpaceEntity } from '@/global/entities';

export const SPACE_MOCK: SpaceEntity = {
  identifier: 1,
  title: 'Clínica XPTO',
  endDate: '',
  startDate: '',
  photos: [
    {
      content: '/images/ex-consult2.jpeg',
      title: 'Sala médica A',
      createdAt: '2024-10-21',
      updatedAt: '2024-10-21',
      description: 'Imagem 2',
      identifier: 123,
    },
    {
      content: '/images/ex-consult2.jpeg',
      title: 'Sala médica A',
      createdAt: '2024-10-21',
      updatedAt: '2024-10-21',
      description: 'Imagem 2',
      identifier: 123,
    },
    {
      content: '/images/ex-consult2.jpeg',
      title: 'Sala médica A',
      createdAt: '2024-10-21',
      updatedAt: '2024-10-21',
      description: 'Imagem 2',
      identifier: 123,
    },
    {
      content: '/images/ex-consult2.jpeg',
      title: 'Sala médica A',
      createdAt: '2024-10-21',
      updatedAt: '2024-10-21',
      description: 'Imagem 2',
      identifier: 123,
    },
    {
      content: '/images/ex-consult2.jpeg',
      title: 'Sala médica A',
      createdAt: '2024-10-21',
      updatedAt: '2024-10-21',
      description: 'Imagem 2',
      identifier: 123,
    },
    {
      content: '/images/ex-consult2.jpeg',
      title: 'Sala médica A',
      createdAt: '2024-10-21',
      updatedAt: '2024-10-21',
      description: 'Imagem 2',
      identifier: 123,
    },
  ],
  // room: "Sala Médica A",
  contacts: [
    {
      value: 'Karine Simoni Rocha',
      // avatar: "/images/user-avatar.jpg",
      type: ContactTypeEnum.EMAIL_ADDRESS,
      identifier: 1234,
      createdAt: '2024-10-21',
      updatedAt: '2024-10-21',
    },
    {
      value: 'Dr. Ricardo Tadeu Prado',
      // avatar: "/images/user-avatar.jpg",
      type: ContactTypeEnum.EMAIL_ADDRESS,
      identifier: 1234,
      createdAt: '2024-10-21',
      updatedAt: '2024-10-21',
    },
  ],
  equipments: [
    EquipmentEnum.COMPUTED_TOMOGRAPHY_SCANNER,
    EquipmentEnum.COMPUTER,
    EquipmentEnum.CONCIERGE,
    EquipmentEnum.DRINKING_FOUNTAIN,
  ],
  description:
    'Altamente equipada, a Clinica Istambul Prime, conta com uma espaço médico criado especialmente para que o paciente seja atendido de forma integral e humanizada.',
  price: {
    createdAt: '2024-10-01',
    currency: 'R$',
    identifier: 123,
    period: PeriodEnum.DAY,
    updatedAt: '2024-10-01',
    value: 100,
  },
  address: {
    complement: '',
    coordinates: [-48.549598, -27.597579],
    country: '',
    createdAt: '',
    identifier: 1,
    neighborhood: '',
    number: '',
    place: '',
    postcode: '',
    region: '',
    street: '',
    updatedAt: '',
  },
  createdAt: '',
  favorite: false,
  updatedAt: null,
};
