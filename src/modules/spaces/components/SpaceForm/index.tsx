import React, { useState, useEffect } from 'react';
import { BackButton } from '@/global/components/BackPage';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface SpaceDetailsComponentProps {
  id?: number;
}

export function SpaceFormComponent({ id }: SpaceDetailsComponentProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [cepData, setCepData] = useState({ state: '', city: '', street: '' });
  const [cep, setCep] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (!files) return;

    const fileArray = Array.from(files);
    const previewUrls = fileArray.map((file) => URL.createObjectURL(file));

    setImages((prevImages) => [...prevImages, ...fileArray]);
    setPreviewUrls((prevUrls) => [...prevUrls, ...previewUrls]);
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const equipments = [
    'Tomógrafo',
    'Computador',
    'Concierge',
    'Desfibrilador',
    'Bebedouro',
    'Eletrocardiógrafo',
    'Elevador',
    'Telefone Fixo',
    'Ressonância Magnética',
    'Ventilador Mecânico',
    'Nebulizador',
    'Impressora',
    'Oxímetro de Pulso',
    'Esfigmomanômetro',
    'Estetoscópio',
    'Maca',
    'Sistema de Vigilância',
    'Termômetro',
    'Ultrassom',
    'Monitor de Sinais Vitais',
    'Raio-X',
  ];

  const securityItems = [
    'Detector de fumaça',
    'Extintor de incêndio',
    'Alarme monóxido de carbono',
    'Luva descartável',
    'Máscara descartável',
    'Touca descartável',
    'Jalecos e aventais',
    'Óculos de proteção',
  ];

  const spaceTeam = ['Secretária', 'Enfermeira'];

  const fetchCepData = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;
      setCepData({
        state: data.uf || '',
        city: data.localidade || '',
        street: data.logradouro || '',
      });
    } catch (error) {
      console.error('Erro ao buscar o CEP:', error);
      setCepData({ state: '', city: '', street: '' });
    }
  };

  // VERIFICAR O PORQUE DO useEffect retornar erro
  useEffect(() => {
    if (cep.length === 8) {
      fetchCepData(cep);
    }
  }, [cep]); // Sempre vai ser executado quando o cep mudar

  const showStep = (step: number) => {
    setCurrentStep(step);
  };

  const validateStep = (step: number) => {
    const stepElement = document.getElementById(`step-${step}`);
    if (!stepElement) return false;

    const inputs = stepElement.querySelectorAll('input[required], select[required]');
    let isValid = true;

    inputs.forEach((input: any) => {
      if (!input.value) {
        isValid = false;
        input.classList.add('border-red-500');
      } else {
        input.classList.remove('border-red-500');
      }
    });

    return isValid;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      showStep(currentStep + 1);
    }
  };

  const handleSelect = (clickedStep: number) => {
    if (clickedStep + 1 > currentStep) {
      if (
        validateStep(currentStep) &&
        (clickedStep + 1 - currentStep === 1 || validateStep(currentStep + 1))
      ) {
        showStep(clickedStep + 1);
      }
    } else {
      showStep(clickedStep + 1);
    }
  };

  const handlePrev = () => {
    showStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      alert('Form submitted successfully!');
    }
  };

  const triggerFileInput = () => {
    document.getElementById('image-upload')?.click();
  };

  return (
    <div className="sm:px-10 container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Cadastro de Espaço de Saúde</h1>
      <p className="text-gray-600 mb-8">
        Preencha as informações a seguir para finalizar o cadastro de seu espaço de saúde.
      </p>
      <div className="relative grid grid-cols-1 gap-6 border rounded-lg shadow-md p-4 sm:p-166">
        <div className="flex items-center justify-center">
          <div className="container mx-auto p-4">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {['Identificação', 'Localização', 'Detalhes'].map((label, index) => (
                  <span
                    key={index}
                    className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full w-[4.2rem] md:w-auto break-words cursor-pointer	${
                      currentStep >= index + 1
                        ? 'text-primary-main bg-primary-lighter'
                        : 'text-primary-main bg-primary-lighter opacity-50'
                    }`}
                    onClick={() => handleSelect(index)}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-lighter">
                <div
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-dark transition-all duration-500 ease-in-out"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Form */}
            <form id="multi-step-form" onSubmit={handleSubmit}>
              {/* Step 1 */}
              <div id="step-1" className={currentStep === 1 ? '' : 'hidden'}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Nome da Sala
                    </label>
                    <input
                      type="text"
                      id="roomName"
                      placeholder="Digite o nome da sala"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 focus:outline-none block w-full p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Alvará de Funcionamento
                    </label>
                    <input
                      type="text"
                      placeholder="Informe o alvará de funcionamento da clínica ou consultório"
                      id="operationLicense"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 focus:outline-none block w-full p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Responsável Técnico
                    </label>
                    <input
                      type="tel"
                      id="technicalManager"
                      placeholder="Informe o nome do responsável técnico"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 focus:outline-none block w-full p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      CRM/CRO
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Informe o CRM Ou CRO do responsável técnico"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 focus:outline-none block w-full p-2.5"
                      required
                    />
                  </div>
                  {/* Multiselect Visual */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Informe o que seu espaço tem para oferecer
                    </label>
                    <div
                      id="equipments"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-4 space-y-2 max-h-52 overflow-y-auto"
                    >
                      {equipments.map((equipment, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`equipment-${index}`}
                            value={equipment}
                            name="equipments"
                            className="w-4 h-4 text-[#0148AF] bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor={`equipment-${index}`}
                            className="ml-2 text-sm font-medium text-gray-900"
                          >
                            {equipment}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Itens de Segurança
                    </label>
                    <div
                      id="securityItems"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-4 space-y-2 max-h-52 overflow-y-auto"
                    >
                      {securityItems.map((securityItem, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`securityItem-${index}`}
                            value={securityItem}
                            name="securityItems"
                            className="w-4 h-4 text-[#0148AF] bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor={`securityItem-${index}`}
                            className="ml-2 text-sm font-medium text-gray-900"
                          >
                            {securityItem}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="details"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Sobre o consultório
                    </label>
                    <textarea
                      id="details"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 focus:outline-none block w-full p-2.5"
                      rows={4}
                      placeholder="Descreva os detalhes do consultório"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div id="step-2" className={currentStep === 2 ? '' : 'hidden'}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900">CEP</label>
                    <input
                      type="text"
                      id="cep"
                      placeholder="Informe o CEP do consultório"
                      value={cep}
                      onChange={(e) => setCep(e.target.value.replace(/\D/g, '').slice(0, 8))}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 focus:outline-none block w-full p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Logradouro
                    </label>
                    <input
                      type="text"
                      id="street"
                      placeholder="Logradouro"
                      value={cepData.street}
                      readOnly
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg cursor-default focus:outline-none block w-full p-2.5"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Número</label>
                    <input
                      type="number"
                      id="number"
                      placeholder="Informe o número"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 focus:outline-none block w-full p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Cidade</label>
                    <input
                      type="text"
                      id="city"
                      placeholder="Cidade"
                      value={cepData.city}
                      readOnly
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg cursor-default focus:outline-none block w-full p-2.5"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Estado</label>
                    <input
                      type="text"
                      id="state"
                      placeholder="UF"
                      value={cepData.state}
                      readOnly
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg cursor-default focus:outline-none block w-full p-2.5"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Complemento
                    </label>
                    <input
                      type="text"
                      id="complement"
                      placeholder="Informe o complemento"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 focus:outline-none block w-full p-2.5"
                    />
                  </div>
                </div>
              </div>

              {/* Upload de imagens */}
              <div id="step-3" className={currentStep === 3 ? '' : 'hidden'}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="md:col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Upload de Imagens
                    </label>
                    <div
                      className="relative border border-gray-300 rounded-lg bg-gray-50 shadow-md p-4 flex items-center justify-center cursor-pointer hover:shadow-lg transition"
                      onClick={triggerFileInput}
                    >
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        id="image-upload"
                        className="hidden"
                      />
                      {previewUrls.length === 0 ? (
                        <img
                          src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                          alt="Clique para selecionar imagens"
                          className="h-32 w-32 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="flex space-x-4 overflow-x-auto">
                          {previewUrls.map((url, index) => (
                            <div key={index} className="relative flex-shrink-0">
                              <img
                                src={url}
                                alt={`Preview ${index}`}
                                className="h-32 w-32 object-cover rounded-lg shadow-md"
                              />
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeImage(index);
                                }}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 text-xs hover:bg-red-600 focus:outline-none"
                              >
                                X
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Período: De - até
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 focus:outline-none block w-full p-2.5"
                      placeholderText="Data de início"
                      dateFormat="dd/MM/yyyy"
                      popperPlacement="bottom"
                      withPortal
                    />
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 focus:outline-none block w-full p-2.5"
                      placeholderText="Data final"
                      dateFormat="dd/MM/yyyy"
                      popperPlacement="bottom"
                      withPortal
                    />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Equipe Consultório
                    </label>
                    <div
                      id="spaceTeam"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-[0.66rem] space-y-2 max-h-52 overflow-y-auto"
                    >
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {spaceTeam.map((collaborator, index) => (
                          <div key={index} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`spaceTeam-${index}`}
                              value={collaborator}
                              name="spaceTeam"
                              className="w-4 h-4 text-[#0148AF] bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label className="ml-2 text-sm font-medium text-gray-900">
                              {collaborator}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Valor do Consultório
                    </label>
                    <input
                      type="text"
                      id="spaceValue"
                      placeholder="Informe o valor da diária do consultório"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 focus:outline-none block w-full p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Taxa de serviços do consultório
                    </label>
                    <input
                      type="text"
                      id="spaceTax"
                      placeholder="Informe a taxa de serviço do consultório"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 focus:outline-none block w-full p-2.5"
                      required
                    />
                  </div>
                  <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900">Banco</label>
                      <input
                        type="text"
                        id="bank"
                        placeholder="Informe o banco"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 focus:outline-none block w-full p-2.5"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900">
                        Agência
                      </label>
                      <input
                        type="text"
                        id="ag"
                        placeholder="Informe a agência"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 focus:outline-none block w-full p-2.5"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900">
                        Número da Conta
                      </label>
                      <input
                        type="text"
                        id="accountNumber"
                        placeholder="Informe o número da conta (com o digíto)"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 focus:outline-none block w-full p-2.5"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {currentStep === 1 ? (
                  <BackButton url="/spaces/list" />
                ) : (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="h-full w-auto text-center bg-primary-main text-white font-bold py-2 px-4 rounded-lg hover:bg-[#2c5c7e] focus:outline-none"
                  >
                    Voltar
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleNext}
                  className={`px-4 py-2 bg-primary-main text-white rounded-lg hover:bg-primary-dark focus:outline-none ${
                    currentStep === 3 ? 'hidden' : ''
                  }`}
                >
                  Próximo
                </button>
                <button
                  type="submit"
                  className={`px-4 py-2 bg-primary-main text-white rounded-lg hover:bg-primary-dark focus:outline-none ${
                    currentStep !== 3 ? 'hidden' : ''
                  }`}
                >
                  Cadastrar Espaço
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
