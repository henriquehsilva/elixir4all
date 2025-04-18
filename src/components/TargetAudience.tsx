import React from 'react';

const TargetAudience: React.FC = () => {
  const audiences = [
    {
      emoji: '👦',
      title: 'Jovens Curiosos',
      description: 'Perfeito para quem é naturalmente curioso sobre tecnologia e quer entender como funciona a programação.'
    },
    {
      emoji: '💻',
      title: 'Primeiros Passos no Código',
      description: 'Ideal para quem deseja iniciar no mundo da programação sem complicações ou pré-requisitos.'
    },
    {
      emoji: '🧠',
      title: 'Amantes de Desafios',
      description: 'Se você gosta de quebra-cabeças e desafios mentais, vai adorar os exercícios práticos do curso.'
    },
    {
      emoji: '🚀',
      title: 'Futuros Inovadores',
      description: 'Para jovens que sonham em criar suas próprias aplicações e fazer a diferença com tecnologia.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-purple-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Para quem é este curso?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Desenvolvido especialmente para quem quer entrar no mundo da programação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((item, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center transform hover:scale-105"
            >              
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Não importa se você nunca programou antes ou se já teve algum contato com código. 
            O curso foi desenhado para ser acessível e ao mesmo tempo desafiador para todos os níveis.
          </p>
          {/* <div className="inline-block rounded-full px-6 py-3 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
            <p className="font-medium">
              Idade recomendada: 12 a 20 anos
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;