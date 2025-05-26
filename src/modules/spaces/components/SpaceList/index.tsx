import React, { useState } from 'react';
import Image from 'next/image';
import { useListSpaces } from '../../hooks/useListSpaces';
import { PhotoEntity } from '@/global/entities';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const LoadingContent = dynamic(
  () => import('@/global/components/LoadingScreen/components/LoadingContent'),
  { ssr: false }
);

export function SpaceListComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const router = useRouter();

  const { spaces, isLoading } = useListSpaces();

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const goToDetail = (spaceId: number) => {
    router.push(`/spaces/details/${spaceId}`);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const getMainImage = (photos: PhotoEntity[]) => {
    return photos[0];
  };

  if (isLoading) {
    return <LoadingContent />;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-4 px-8 sm:px-20 py-4">
        {spaces.map((space) => (
          <div key={space.identifier} className="border rounded-lg shadow-md p-4">
            <div
              className="w-full h-75 relative cursor-pointer"
              // onClick={() => openModal(getMainImage(space.photos).content)}
              onClick={() => goToDetail(space.identifier)}
            >
              <Image
                src={getMainImage(space.photos).content}
                alt={space.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold text-center">{space.title}</h3>
            <p className="mt-2 text-gray-600 text-center">{space.description}</p>
            <p className="mt-2 text-gray-600 text-center">
              {space.startDate} até {space.endDate}
            </p>
          </div>
        ))}
      </div>

      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative max-w-full max-h-full p-4">
            <Image
              src={selectedImage}
              alt="Imagem ampliada"
              width={900}
              height={900}
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          <button
            className="relative top-0 float-right pb-[45rem] text-white text-3xl font-bold"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
