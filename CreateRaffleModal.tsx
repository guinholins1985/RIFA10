import React, { useState } from 'react';
import { Raffle } from './types';
import { CLOSE_ICON } from './Icons';

interface CreateRaffleModalProps {
  onClose: () => void;
  onCreate: (newRaffleData: Omit<Raffle, 'id'>) => void;
}

const CreateRaffleModal: React.FC<CreateRaffleModalProps> = ({ onClose, onCreate }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imageUrl: '',
        category: '',
        ticketPrice: 0,
        goalAmount: 0,
        daysLeft: 30,
        raisedAmount: 0
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: name === 'ticketPrice' || name === 'goalAmount' || name === 'daysLeft' ? parseFloat(value) : value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCreate(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg relative animate-fade-in-up">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
                    {CLOSE_ICON}
                </button>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Criar Nova Rifa</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input name="title" value={formData.title} onChange={handleChange} placeholder="Título da Rifa" className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:outline-none" required />
                        <input name="category" value={formData.category} onChange={handleChange} placeholder="Categoria" className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:outline-none" required />
                        <input name="ticketPrice" value={formData.ticketPrice} onChange={handleChange} type="number" placeholder="Preço do Bilhete" className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:outline-none" required />
                        <input name="goalAmount" value={formData.goalAmount} onChange={handleChange} type="number" placeholder="Meta de Arrecadação" className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:outline-none" required />
                        <input name="daysLeft" value={formData.daysLeft} onChange={handleChange} type="number" placeholder="Dias Restantes" className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:outline-none" required />
                    </div>
                    <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="URL da Imagem de Capa" className="p-2 border border-gray-300 rounded w-full mb-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none" required />
                    <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Descrição detalhada da rifa..." className="p-2 border border-gray-300 rounded w-full mb-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none" rows={3} required></textarea>
                    <div className="flex justify-end space-x-4">
                        <button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                            Cancelar
                        </button>
                        <button type="submit" className="bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
                            Criar Rifa
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateRaffleModal;
