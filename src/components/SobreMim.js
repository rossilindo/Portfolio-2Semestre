import React from 'react';

const SobreMim = () => {
  return (
    <>
      {/* Seção Sobre Mim */}
      <section className="p-6 md:p-10 bg-[#2C2F33] text-white rounded-lg shadow-xl max-w-4xl mx-auto mt-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-amber-300 mb-6">Sobre Mim</h1>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          Olá! Sou <span className="text-amber-300">João Vitor Rossi</span>, um desenvolvedor web apaixonado por criar soluções inovadoras. 
          Tenho fluência em <span className="text-amber-300">inglês</span> e <span className="text-amber-300">português</span>, o que me permite trabalhar e colaborar com equipes internacionais.
          <br />
          Estou constantemente me aprimorando em diversas áreas, com foco em tecnologias como HTML, CSS, JavaScript e Python. Acredito que a tecnologia tem o poder de transformar o mundo e melhorar a vida das pessoas, e meu objetivo é contribuir para esse processo com minhas habilidades.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-amber-300 mt-8 mb-4">Habilidades Profissionais</h2>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          Possuo conhecimentos sólidos em <span className="text-amber-300">HTML</span> e <span className="text-amber-300">CSS</span>, com a capacidade de criar interfaces web eficientes e visualmente atraentes. 
          Estou em constante aprimoramento em <span className="text-amber-300">Python</span>, buscando desenvolver soluções robustas e escaláveis para desafios de programação. Além disso, estou explorando conceitos em <span className="text-amber-300">JavaScript</span> e <span className="text-amber-300">TypeScript</span> para ampliar minhas habilidades no desenvolvimento web.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-amber-300 mt-8 mb-4">Meus Hobbies e Interesses</h2>
        <ul className="list-disc ml-6 space-y-2 text-base md:text-lg text-gray-300">
          <li>💻 Programação: Sempre buscando novos desafios e aperfeiçoamento em frameworks como React, Node.js, e tecnologias de desenvolvimento front-end e back-end.</li>
          <li>🎮 Jogos: Além de programar, sou um grande fã de jogos eletrônicos, especialmente os de MOBA e FPS. Acredito que os jogos têm uma maneira única de estimular a criatividade e o pensamento crítico.</li>
          <li>📚 Leitura de Mangás: Leitura de mangás não apenas me proporciona entretenimento, mas também estimula minha criatividade e imaginação.</li>
          <li>🚀 Exploração de novas tecnologias: Tenho um grande interesse por IA, blockchain e outras tecnologias emergentes. Estou sempre explorando como essas tecnologias podem ser aplicadas para resolver problemas reais.</li>
        </ul>
      </section>

      {/* Seção Minhas Formações */}
      <section className="p-6 md:p-10 bg-[#2C2F33] text-white rounded-lg shadow-xl max-w-4xl mx-auto mt-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-amber-300 mb-6">Minhas Formações</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formação Ensino Médio */}
          <div className="bg-[#343A40] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-amber-300 mb-2">Ensino Médio</h3>
            <p className="text-base md:text-lg text-gray-300">
              <span className="font-semibold">Instituição:</span> Prof. Nelson Ilza Nascimento Monteiro
            </p>
            <p className="text-base md:text-lg text-gray-300">
              <span className="font-semibold">Período:</span> 2021 - 2023
            </p>
          </div>

          {/* Formação Curso Superior */}
          <div className="bg-[#343A40] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-amber-300 mb-2">Curso Superior de Desenvolvimento de Software Multiplataforma</h3>
            <p className="text-base md:text-lg text-gray-300">
              <span className="font-semibold">Instituição:</span> Fatec Prof. Jessen Vidal - São José dos Campos
            </p>
            <p className="text-base md:text-lg text-gray-300">
              <span className="font-semibold">Período:</span> CURSANDO | 2024 - XXXX
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SobreMim;
