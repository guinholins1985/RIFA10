import React, { useState } from 'react';
import { View } from './App';

interface LoginPageProps {
  onLoginAttempt: (user: string, pass: string) => boolean;
  onNavigate: (view: View) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginAttempt, onNavigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const success = onLoginAttempt(username, password);
    if (!success) {
      setError('Usuário ou senha inválidos.');
    }
  };

  return (
    <div className="min-h-screen bg-brand-light-gray flex flex-col justify-center items-center p-4">
        <div 
            className="text-4xl font-bold text-emerald-600 mb-8 cursor-pointer"
            onClick={() => onNavigate('home')}
        >
            RIFA<span className="text-amber-500">10</span>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Acessar Painel</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Usuário
                    </label>
                    <input
                        className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        id="username"
                        type="text"
                        placeholder="Seu usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Senha
                    </label>
                    <input
                        className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        id="password"
                        type="password"
                        placeholder="******************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                <div className="flex items-center justify-between">
                    <button
                        className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full transition-colors duration-300"
                        type="submit"
                    >
                        Entrar
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default LoginPage;
