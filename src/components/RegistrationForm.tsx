import React, { useState } from 'react';
import { Check, CreditCard } from 'lucide-react';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    guardian: '',
    paymentMethod: 'full'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit to a backend
    // For demo purposes, we'll just show a success message
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="inscricao" className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-purple-900">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
              <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Inscrição Recebida!</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Obrigado por se inscrever no curso Elixir Jovem! Em breve você receberá um email com as informações para completar o pagamento e acessar o curso.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow transition-colors duration-300"
            >
              Voltar para o formulário
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inscricao" className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-purple-900">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Garanta sua vaga
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Preencha o formulário abaixo para se inscrever no curso e iniciar sua jornada!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg">
              <div className="mb-5">
                <label htmlFor="name" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="age" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                  Idade
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  min="8"
                  max="30"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                  placeholder="Sua idade"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="guardian" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                  Nome do responsável (se menor de idade)
                </label>
                <input
                  type="text"
                  id="guardian"
                  name="guardian"
                  value={formData.guardian}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors"
                  placeholder="Nome do responsável (se aplicável)"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                Reservar minha vaga
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Opções de pagamento</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="full"
                    name="paymentMethod"
                    value="full"
                    checked={formData.paymentMethod === 'full'}
                    onChange={handleChange}
                    className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                  />
                  <label htmlFor="full" className="ml-3 block font-medium">
                    <span className="text-lg">À vista</span>
                    <span className="block text-gray-500 dark:text-gray-400">R$79,00</span>
                  </label>
                  <span className="ml-auto bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm px-3 py-1 rounded-full">
                    Melhor valor
                  </span>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="installments"
                    name="paymentMethod"
                    value="installments"
                    checked={formData.paymentMethod === 'installments'}
                    onChange={handleChange}
                    className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                  />
                  <label htmlFor="installments" className="ml-3 block font-medium">
                    <span className="text-lg">Parcelado</span>
                    <span className="block text-gray-500 dark:text-gray-400">3x de R$29,90 (R$89,70)</span>
                  </label>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-600 pt-6 mb-6">
                <h4 className="font-semibold mb-4">Formas de pagamento aceitas:</h4>
                <div className="flex items-center space-x-4 mb-4">
                  <CreditCard className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                  <span className="text-gray-600 dark:text-gray-300">Cartão de crédito, boleto, Pix</span>
                </div>
              </div>

              <div className="rounded-lg bg-purple-50 dark:bg-purple-900/10 p-4 mb-6">
                <h4 className="font-semibold mb-2">O que está incluso:</h4>
                <ul className="space-y-2">
                  {[
                    'Acesso vitalício a todo conteúdo do curso',
                    'Mais de 30 horas de vídeo-aulas',
                    'Exercícios práticos e desafios',
                    'Comunidade exclusiva para alunos',
                    'Certificado de conclusão',
                    'Atualizações e novos conteúdos'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
                Ao se inscrever, você concorda com nossos <a href="#" className="underline hover:text-purple-600 dark:hover:text-purple-400">termos de uso</a> e <a href="#" className="underline hover:text-purple-600 dark:hover:text-purple-400">política de privacidade</a>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;