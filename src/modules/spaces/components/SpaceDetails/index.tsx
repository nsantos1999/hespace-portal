import React, { useState } from 'react';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSpaceDetails } from '../../hooks/useSpaceDetails';
import { EquipmentRecord } from '@/global/constants/records/equipment.record';
import { SimpleMap } from '@/global/components/SimpleMap';
import LoadingContent from '@/global/components/LoadingScreen/components/LoadingContent';
interface SpaceDetailsComponentProps {
  id: number;
}

export function SpaceDetailsComponent({ id }: SpaceDetailsComponentProps) {
  const { space, isLoading } = useSpaceDetails(id.toString());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (isLoading) return <LoadingContent />;
  if (!space) return <p>Espaço não encontrado</p>;

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="container px-4 sm:px-8">
      <div className="text-left mb-6">
        <h1 className="text-2xl sm:text-4xl font-bold">{space.title}</h1>
        <h2 className="text-xl sm:text-2xl text-gray-600">{space?.address?.street}</h2>
      </div>

      <div className="flex">
        <div className="flex w-[66.5%] flex-wrap">
          <div className="w-full pr-2 pb-2">
            <img
              src={space.photos[0].content} // {space.first_image}
              alt={space.photos[0].title || ''}
              className="block h-full w-full rounded-lg object-cover object-center"
              onClick={() => openModal(space.photos[0].content)}
            />
          </div>
          <div className="w-1/2 pr-2 pt-2">
            <img
              src={space.photos[1].content}
              alt={space.photos[1].title || ''}
              className="block h-full w-full rounded-lg object-cover object-center"
              onClick={() => openModal(space.photos[1].content)}
            />
          </div>
          <div className="w-1/2 px-2 pt-2">
            <img
              src={space.photos[2].content}
              alt={space.photos[2].title || ''}
              className="block h-full w-full rounded-lg object-cover object-center"
              onClick={() => openModal(space.photos[2].content)}
            />
          </div>
        </div>
        <div className="flex w-[33%] flex-col">
          <div className="w-full pl-2 pb-2">
            <img
              src={space.photos[3].content}
              alt={space.photos[3].title || ''}
              className="block h-full w-full rounded-lg object-cover object-center"
              onClick={() => openModal(space.photos[3].content)}
            />
          </div>
          <div className="w-full pl-2 py-2">
            <img
              src={space.photos[4].content}
              alt={space.photos[4].title || ''}
              className="block h-full w-full rounded-lg object-cover object-center"
              onClick={() => openModal(space.photos[4].content)}
            />
          </div>
          <div className="w-full pl-2 pt-2">
            <img
              src={space.photos[5].content}
              alt={space.photos[5].title || ''}
              className="block h-full w-full rounded-lg object-cover object-center"
              onClick={() => openModal(space.photos[5].content)}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleBackgroundClick}
        >
          <div className="relative max-w-full max-h-full p-4">
            <Image
              src={selectedImage}
              alt="Imagem ampliada"
              width={900} // Ajuste conforme necessário
              height={900} // Ajuste conforme necessário
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>
      )}

      <p className="mt-2">{space.address.place || 'Sala X'}</p>

      <hr className="border-[#93c4e8] border-t-2 mt-4 mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-4">
        <div className="mb-6 p-2 border border-[#93c4e8] rounded-lg">
          <p className="ml-2 mb-2">Responsável pela locação</p>
          <div className="flex gap-4 ml-2">
            <Image
              src="/images/user-avatar.jpg"
              alt="User Avatar"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              {space?.contacts[0] && (
                <p className="text-lg font-semibold">{space.contacts[0].value}</p>
              )}
              <p className="text-sm text-gray-600">1 ano no Hespace</p>
            </div>
          </div>
        </div>

        <div className="mb-6 p-2 border border-[#93c4e8] rounded-lg">
          <p className="ml-2 mb-2">Responsável Técnico</p>
          <div className="flex gap-4">
            <div>
              <p className="text-lg ml-2 font-semibold">{space.contacts[1].value}</p>
              <p className="text-sm ml-2 text-gray-600">CRM/ 9999 - RQE 999</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <div className="mb-6 p-4 border border-[#93c4e8] rounded-lg">
            <p className="text-lg font-semibold mb-2">Equipamentos</p>
            <div className="grid grid-cols-2 gap-4">
              {space.equipments.map((equipment, index) => (
                <div key={index} className="flex w-full flex-wrap">
                  <p className="text-sm text-gray-600">{EquipmentRecord[equipment].name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 border border-[#93c4e8] rounded-lg">
            <p className="text-lg font-semibold mb-2">Informações</p>
            <p className="text-sm text-gray-600">{space.description}</p>
          </div>
        </div>

        <div className="p-4 border border-[#93c4e8] rounded-lg">
          <p className="text-lg font-semibold mb-2">Cotar reserva</p>
          <div className="flex items-center gap-2">
            <div className="w-1/2">
              <DatePicker
                //selected={inicio}
                //onChange={(date) => setInicio(date)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#93c4e8]"
                placeholderText="Data de início"
                dateFormat="dd/MM/yyyy"
                popperPlacement="bottom"
                withPortal
              />
            </div>

            <div className="w-1/2">
              <DatePicker
                //selected={fim}
                //onChange={(date) => setFim(date)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#93c4e8]"
                placeholderText="Data final"
                dateFormat="dd/MM/yyyy"
                popperPlacement="bottom"
                withPortal
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-[#407398] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#305b78] focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <hr className="border-[#93c4e8] border-t-2 my-4" />

          <div className="flex gap-4 py-2">
            <div className="flex w-3/4 flex-wrap">
              <p className="text-sm text-gray-600">
                {space.price.currency} {space.price.value} X {space.price.period} dias
              </p>
            </div>
            <div className="flex w-1/4 flex-wrap justify-end">
              <p className="text-sm text-gray-600">
                {space.price.currency + ' ' + Number(space.price.value) * Number(1)}
              </p>
            </div>
          </div>
          <div className="flex gap-4 py-2">
            <div className="flex w-3/4 flex-wrap">
              <p className="text-sm text-gray-600">Taxa de serviços do consultório</p>
            </div>
            <div className="flex w-1/4 flex-wrap justify-end">
              <p className="text-sm text-gray-600">
                {space.price.currency} {space.price.value}
              </p>
            </div>
          </div>
          <div className="flex gap-4 py-2">
            <div className="flex w-3/4 flex-wrap">
              <p className="text-sm text-gray-600">Taxa de serviços do Hespace</p>
            </div>
            <div className="flex w-1/4 flex-wrap justify-end">
              <p className="text-sm text-gray-600">
                {space.price.currency} {space.price.value}
              </p>
            </div>
          </div>
          <div className="flex gap-4 py-2">
            <div className="flex w-3/4 flex-wrap">
              <p className="text-sm text-gray-600">Taxa de destaque</p>
            </div>
            <div className="flex w-1/4 flex-wrap justify-end">
              <p className="text-sm text-gray-600">
                {space.price.currency} {space.price.value}
              </p>
            </div>
          </div>

          <hr className="border-[#93c4e8] border-t-2 my-2" />

          <div className="flex gap-4 py-2">
            <div className="flex w-[60%]">
              <p className="text-lg font-bold">
                Total <span className="text-xs">(sem impostos)</span>{' '}
              </p>
            </div>
            <div className="flex w-[40%] justify-end">
              <p className="text-lg font-bold">
                <span className="text-xs">R$</span> 750,00
              </p>
            </div>
          </div>

          <div className="w-full pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-[#407398] text-white font-bold py-1 rounded-lg hover:bg-[#305b78] focus:outline-none"
            >
              Reservar
            </button>
          </div>
        </div>
      </div>

      <div className="h-64 mb-6">
        <p className="text-lg font-semibold mb-2">Localização</p>
        <SimpleMap
          latitude={space.address.coordinates[0]}
          longitude={space.address.coordinates[1]}
        />
      </div>
    </div>
  );
}
