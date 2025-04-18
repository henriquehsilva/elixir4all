import React from 'react';
import { Sparkles, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center mb-6 md:mb-0">
            <Sparkles className="h-7 w-7 text-purple-400 mr-2" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Elixir Jovem
            </span>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="h-10 w-10 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="h-10 w-10 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="h-10 w-10 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="mailto:contato@henriquesilva.dev" 
              className="h-10 w-10 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Sobre o Curso</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#conteudo" className="hover:text-purple-400 transition-colors">Conteúdo</a></li>
              <li><a href="#instrutor" className="hover:text-purple-400 transition-colors">Instrutor</a></li>
              <li><a href="#inscricao" className="hover:text-purple-400 transition-colors">Inscrição</a></li>
              <li><a href="#faq" className="hover:text-purple-400 transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Recursos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Material Gratuito</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Comunidade</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Projetos de Alunos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Suporte</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Termos de Uso</a></li>              
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-6 border-t border-gray-800 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ElixirParaTod@s. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;