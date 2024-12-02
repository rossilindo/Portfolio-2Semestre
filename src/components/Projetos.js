import React, { useState } from 'react';

const Projetos = () => {
  const [isOpenEstufa, setIsOpenEstufa] = useState(false);
  const [isOpenProStock, setIsOpenProStock] = useState(false);

  return (
    <section className="p-8 text-white">
      <h1 className="text-4xl font-semibold text-center mb-8">Projetos Acadêmicos</h1>
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 justify-center">
        {/* Projeto Estufa */}
        <div className="bg-[#2C2F33] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-amber-300">Projeto Estufa</h2>
          <img 
            src="smartfarm.png" 
            alt="Projeto Estufa" 
            className="mt-4 rounded-lg shadow-sm w-full h-96 object-cover"
          />
          <button 
            onClick={() => setIsOpenEstufa(!isOpenEstufa)} 
            className="mt-4 bg-[#343A40] text-amber-300 py-3 px-8 rounded-lg transition-colors duration-300 hover:bg-[#27292e] focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            {isOpenEstufa ? 'Fechar' : 'Saiba Mais'}
          </button>
          {/* Informações do projeto Estufa */}
          {isOpenEstufa && (
            <div className="mt-4 text-lg bg-[#343A40] p-4 rounded-lg">
              <p>Neste projeto, contribuí com o desenvolvimento da arquitetura de informação e o design das interfaces do site. Também trabalhei na integração de containers de plataformas de execução para criar uma estufa virtual inteligente, visando otimizar o controle e análise de dados dos sensores de forma automatizada, com uma interface amigável e gráficos para melhor visualização e eficiência.</p>
            </div>
          )}
          <div className="mt-4">
            <a href="https://github.com/CyberScrums/Projeto-Smart-Farming" className="text-amber-300 hover:text-amber-400" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
          </div>
        </div>

        {/* Projeto ProStock */}
        <div className="bg-[#2C2F33] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-amber-300">Projeto ProStock</h2>
          <img 
            src="prostock.png" 
            alt="Projeto ProStock" 
            className="mt-4 rounded-lg shadow-sm w-full h-96 object-cover"
          />
          <button 
            onClick={() => setIsOpenProStock(!isOpenProStock)} 
            className="mt-4 bg-[#343A40] text-amber-300 py-3 px-8 rounded-lg transition-colors duration-300 hover:bg-[#27292e] focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            {isOpenProStock ? 'Fechar' : 'Saiba Mais'}
          </button>
          {/* Informações do projeto ProStock */}
          {isOpenProStock && (
            <div className="mt-4 text-lg bg-[#343A40] p-4 rounded-lg">
              <p>Neste projeto, atuei como master da equipe, com o objetivo de desenvolver um programa de gerenciamento de estoque. A solução incluiu a implementação de um sistema completo de CRUD, integrado ao backend, desenvolvido em Prisma e JavaScript, e ao frontend, desenvolvido em TypeScript com React. Trabalhei no gerenciamento de dados e na criação de interfaces intuitivas e funcionais, garantindo que os usuários pudessem gerenciar o estoque de forma eficiente e com alta performance. A integração entre frontend e backend permitiu uma experiência fluida e otimizada para os usuários do sistema.</p>
            </div>
          )}
          <div className="mt-4">
            <a href="https://github.com/EquipeSkyfall/API_2Semestre" className="text-amber-300 hover:text-amber-400" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
