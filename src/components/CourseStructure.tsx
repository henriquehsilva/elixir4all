import React from 'react';
import { Users, Handshake, MapPin, Heart, BookOpen } from 'lucide-react';

const CourseStructure: React.FC = () => {
  const features = [
    {
      icon: <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      title: 'Presencial e na Comunidade',
      description: 'As aulas acontecem em espaços comunitários acessíveis, com estrutura para acolher todos os participantes.'
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      title: 'Turmas Reduzidas',
      description: 'Acompanhamento próximo e personalizado, respeitando o ritmo de cada aluno.'
    },
    {
      icon: <Handshake className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      title: 'Mentoria e Apoio',
      description: 'Além das aulas, você terá orientação de mentores experientes que já trilharam o caminho da tecnologia.'
    },
    {
      icon: <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      title: 'Material Didático Impresso e Digital',
      description: 'Conteúdo acessível para estudar mesmo sem internet, com linguagem clara e prática.'
    },
    {
      icon: <Heart className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      title: 'Foco na Transformação Social',
      description: 'A tecnologia como ferramenta de empoderamento e geração de oportunidades reais.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como funciona o curso
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Uma jornada prática e acolhedora para jovens aprenderem programação em suas próprias comunidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 p-3 inline-block rounded-full bg-purple-100 dark:bg-purple-900/30">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-purple-600 dark:text-purple-400">Trilha de Aprendizado</h3>
          
          <div className="space-y-6">
            {[
              {
                title: "Boas-vindas à Programação",
                desc: "Apresentação do curso, dos computadores e primeiros comandos para despertar o interesse."
              },
              {
                title: "Aprendendo com Elixir",
                desc: "Conhecendo a linguagem de forma prática, com jogos e desafios simples."
              },
              {
                title: "Pensamento Lógico",
                desc: "Atividades para desenvolver raciocínio e resolução de problemas do dia a dia com código."
              },
              {
                title: "Construindo em Grupo",
                desc: "Projetos colaborativos onde os alunos programam juntos e aprendem em equipe."
              },
              {
                title: "Mostra de Talentos",
                desc: "Apresentação final para a comunidade com os projetos desenvolvidos pelos alunos."
              }
            ].map((step, i) => (
              <div className="flex items-start" key={i}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
                  <span className="font-bold text-purple-600 dark:text-purple-400">{i + 1}</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{step.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseStructure;
