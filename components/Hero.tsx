import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-emerald-600 text-white relative">
      <div className="absolute inset-0 bg-gray-800 opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Crie e Participe de Rifas de Sucesso</h2>
        <p className="text-lg md:text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">A plataforma completa para transformar suas ideias em campanhas de arrecadação vitoriosas.</p>
        <a href="#raffles" className="bg-amber-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-600 transition-transform duration-300 ease-in-out transform hover:scale-105 inline-block">
          Explorar Rifas
        </a>
      </div>
    </section>
  );
};

export default Hero;
