import React, { useState } from 'react';
import { BackButton } from '@/global/components/BackPage';
import { useAuth } from '@/modules/auth/hooks/useAuth';

export function UserDetailsComponent() {
  const { authUser } = useAuth();
  const [formData, setFormData] = useState({
    fullName: authUser?.name,
    cpf: '123.456.789-00',
    email: authUser?.email,
    address: 'Rua Exemplo, 123, Cidade',
    zip: '22222222',
    phone: '(11) 98765-4321',
    about: 'Apaixonado por tecnologia e viagens.',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [profileImage, setProfileImage] = useState(
    authUser?.avatar.content ?? 'https://via.placeholder.com/150'
  );

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as any);
        setShowModal(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="sm:px-10 container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Informações Pessoais</h1>
      <p className="text-gray-600 mb-8">
        As informações que você compartilhar serão usadas em todo o site para que outros saibam mais
        sobre você.
      </p>
      <div className="relative grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-6 border rounded-lg shadow-md p-4 sm:p-16">
        <button
          onClick={handleEditToggle}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center color-black focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.414 2.586a2 2 0 010 2.828l-10 10a1 1 0 01-.293.207l-4 2a1 1 0 01-1.32-1.32l2-4a1 1 0 01.207-.293l10-10a2 2 0 012.828 0zM15 4l-1-1-8 8-.293.293L5.586 15l2.707-2.707L15 4z" />
          </svg>
        </button>

        <div className="relative w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 mb-4 flex items-center justify-center mx-auto">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-300">
            <img src={profileImage} alt="Perfil" className="w-full h-full object-cover" />
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="absolute bottom-0 right-1/2 translate-x-1/2 w-20 sm:w-24 h-10 bg-primary-main text-white font-bold rounded-lg hover:bg-primary-dark focus:outline-none transition"
          >
            Alterar
          </button>
        </div>

        <div className="grid gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">Nome Completo</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                disabled={!isEditing}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">CPF</label>
              <input
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                disabled={!isEditing}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">Endereço de Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                disabled={!isEditing}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">Número de Telefone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                disabled={!isEditing}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">CEP</label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                disabled={!isEditing}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">Endereço</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                disabled={!isEditing}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Sobre você</label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 h-32"
              disabled={!isEditing}
            />
          </div>
          {isEditing && (
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="w-full sm:w-auto h-10 bg-primary-main text-white font-bold px-4 rounded-lg hover:bg-primary-dark focus:outline-none transition"
              >
                Salvar
              </button>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-96 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Upload de Imagem</h2>
            <p className="text-gray-600 mb-4 text-center">
              Selecione uma imagem para o seu perfil. Apenas imagens JPG ou PNG são aceitas.
            </p>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-2 border border-gray-300 rounded-lg mb-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-200"
              >
                Cancelar
              </button>
              <button
                onClick={handleImageUpload}
                className="px-4 py-2 bg-primary-main text-white font-bold rounded-lg hover:bg-primary-dark transition duration-200"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="pt-6">
        <BackButton url="/user/account" />
      </div>
    </div>
  );
}
