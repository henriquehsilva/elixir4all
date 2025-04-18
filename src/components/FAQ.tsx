import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        )}
      </button>
      <div
        className={`mt-2 text-gray-600 dark:text-gray-300 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="py-2">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: 'Preciso saber usar computador antes de começar?',
      answer: 'Não! Vamos ensinar desde o início, com calma e na prática. O importante é estar disposto a aprender e participar.'
    },
    {
      question: 'Quem pode fazer o curso?',
      answer: 'O curso é voltado principalmente para jovens da comunidade a partir dos 12 anos, mas todas as idades são bem-vindas.'
    },
    {
      question: 'Onde acontecem as aulas?',
      answer: 'As aulas são realizadas em espaços comunitários da sua região, como centros culturais, escolas ou associações de bairro.'
    },
    {
      question: 'O curso é gratuito?',
      answer: 'Sim! O projeto é social e não cobra nenhum valor dos participantes.'
    },
    {
      question: 'Vai ter certificado?',
      answer: 'Sim! Ao final do curso, quem participar das atividades e do projeto final receberá um certificado impresso e digital.'
    },
    {
      question: 'Preciso levar computador ou celular?',
      answer: 'Não é obrigatório. O projeto disponibiliza os equipamentos necessários durante as aulas presenciais.'
    },
    {
      question: 'Se eu tiver dúvidas, com quem falo?',
      answer: 'Durante o curso, teremos instrutores e monitores prontos para te ajudar. Você também pode falar com o responsável local do projeto.'
    },
    {
      question: 'Posso continuar estudando depois do curso?',
      answer: 'Sim! Ao final, mostramos caminhos para continuar aprendendo, inclusive com materiais online e gratuitos.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Esclareça suas dúvidas sobre como funciona o curso na comunidade.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 md:p-8 shadow-md">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Ainda tem dúvidas? Fale com a equipe do projeto:
          </p>
          <a 
            href="mailto:contato@henriquesilva.dev" 
            className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
          >
            contato@henriquesilva.dev
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
