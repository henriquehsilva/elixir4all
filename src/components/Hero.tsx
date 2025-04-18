import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import CodeBlock from './ui/CodeBlock';

const Hero: React.FC = () => {
  const codeString = `
# Um exemplo simples em Elixir
defmodule MeuJogo do
  def iniciar do
    IO.puts "Bem-vindo ao mundo da programação!"
    
    nome = IO.gets("Qual é o seu nome? ") |> String.trim()
    
    IO.puts "Olá, \#{nome}! Vamos criar algo incrível juntos."
    :ok
  end
end

# Vamos começar!
MeuJogo.iniciar()
  `;

  const scrollToRegistration = () => {
    const element = document.getElementById('inscricao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden relative bg-gradient-to-b from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-purple-950"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Descubra a Magia da Programação com Elixir
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
              Curso divertido e interativo para jovens exploradores do código.
              Aprenda a programar do zero com uma linguagem moderna e poderosa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToRegistration}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                Quero Aprender
              </button>
              <a
                href="#conteudo"
                className="px-8 py-3 bg-transparent border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 font-semibold rounded-lg transition-colors duration-300 text-center"
              >
                Ver Conteúdo
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-6 transform hover:scale-105 transition-transform duration-500">
            <div className="relative">
              <CodeBlock code={codeString} />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-600 rounded-full opacity-20 dark:opacity-40 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-600 rounded-full opacity-20 dark:opacity-40 animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Descubra mais</p>
          <ChevronDown className="h-6 w-6 text-purple-600 dark:text-purple-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;