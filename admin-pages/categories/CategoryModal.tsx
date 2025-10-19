import React from 'react';
import { Category } from '../../types';

interface CategoryModalProps {
  onClose: () => void;
  category: Category | null;
}

const CategoryModal: React.FC<CategoryModalProps> = ({ onClose, category }) => {
  const modalTitle = category ? 'Editar Categoria' : 'Adicionar Nova Categoria';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">{modalTitle}</h2>
        <form>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nome da Categoria</label>
                    <input type="text" defaultValue={category?.name || ''} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Descrição</label>
                    <textarea defaultValue={category?.description || ''} rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"></textarea>
                </div>
            </div>
             <div className="mt-6 flex justify-end">
              <button type="button" onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
                Cancelar
              </button>
              <button type="submit" onClick={(e) => { e.preventDefault(); onClose(); }} className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded">
                Salvar
              </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryModal;
