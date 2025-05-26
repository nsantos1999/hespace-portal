import { EquipmentEnum } from '../enums/equipment.enum';

interface EquipmentRecordData {
  name: string;
}
export const EquipmentRecord: Record<EquipmentEnum, EquipmentRecordData> = {
  [EquipmentEnum.COMPUTED_TOMOGRAPHY_SCANNER]: { name: 'Tomógrafo' },
  [EquipmentEnum.COMPUTER]: { name: 'Computador' },
  [EquipmentEnum.CONCIERGE]: { name: 'Concierge' },
  [EquipmentEnum.DEFIBRILLATOR]: { name: 'Desfibrilador' },
  [EquipmentEnum.DRINKING_FOUNTAIN]: { name: 'Bebedouro' },
  [EquipmentEnum.ELECTROCARDIOGRAM_MACHINE]: { name: 'Eletrocardiógrafo' },
  [EquipmentEnum.ELEVATOR]: { name: 'Elevador' },
  [EquipmentEnum.LANDLINE]: { name: 'Telefone Fixo' },
  [EquipmentEnum.MAGNETIC_RESONANCE_IMAGING_MACHINE]: { name: 'Ressonância Magnética' },
  [EquipmentEnum.MECHANICAL_VENTILATOR]: { name: 'Ventilador Mecânico' },
  [EquipmentEnum.NEBULIZER]: { name: 'Nebulizador' },
  [EquipmentEnum.PRINTER]: { name: 'Impressora' },
  [EquipmentEnum.PULSE_OXIMETER]: { name: 'Oxímetro de Pulso' },
  [EquipmentEnum.SPHYGMOMANOMETER]: { name: 'Esfigmomanômetro' },
  [EquipmentEnum.STETHOSCOPE]: { name: 'Estetoscópio' },
  [EquipmentEnum.STRETCHER]: { name: 'Maca' },
  [EquipmentEnum.SURVEILLANCE_SYSTEM]: { name: 'Sistema de Vigilância' },
  [EquipmentEnum.THERMOMETER]: { name: 'Termômetro' },
  [EquipmentEnum.ULTRASOUND_MACHINE]: { name: 'Ultrassom' },
  [EquipmentEnum.VITAL_SIGNS_MONITOR]: { name: 'Monitor de Sinais Vitais' },
  [EquipmentEnum.X_RAY_MACHINE]: { name: 'Raio-X' },
};
