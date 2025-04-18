import React from 'react';
import { Code, BrainCircuit, Wand2, Puzzle, CheckCircle } from 'lucide-react';

const CourseContent: React.FC = () => {
  const topics = [
    {
      icon: <BrainCircuit className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
      title: 'Fundamentos da Lógica',
      description: 'Aprenda os conceitos básicos da lógica de programação de forma divertida e prática.'
    },
    {
      icon: <Code className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
      title: 'Sintaxe Funcional com Elixir',
      description: 'Descubra como escrever código elegante e poderoso com programação funcional.'
    },
    {
      icon: <Wand2 className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
      title: 'Crie seus Próprios Feitiços',
      description: 'Desenvolva funções e módulos para resolver problemas de forma mágica.'
    },
    {
      icon: <Puzzle className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
      title: 'Exercícios Coding Dojo',
      description: 'Pratique com desafios divertidos que estimulam sua criatividade e raciocínio lógico.'
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
      title: 'Boas Práticas',
      description: 'Aprenda desde cedo os hábitos que fazem de você um desenvolvedor de qualidade.'
    }
  ];

  return (
    <section id="conteudo" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que você vai aprender
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Um curso pensado para jovens que desejam dar os primeiros passos no mundo da programação com uma linguagem moderna e poderosa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="mb-4 p-3 rounded-full bg-purple-100 dark:bg-purple-900/30">
                {topic.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{topic.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{topic.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">E muito mais...</p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            O curso é atualizado constantemente com novos conteúdos e exemplos práticos.
            Você terá acesso a todo material para sempre!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;