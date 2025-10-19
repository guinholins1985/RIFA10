import React from 'react';

interface CreateRaffleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateRaffleModal: React.FC<CreateRaffleModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Criar Nova Rifa</h2>
        <p>Formulário para criação de rifa viria aqui.</p>
        <div className="mt-6 flex justify-end">
          <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
            Cancelar
          </button>
          <button onClick={onClose} className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded">
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRaffleModal;
