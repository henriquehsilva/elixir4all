import React from 'react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const Instructor: React.FC = () => {
  return (
    <section id="instrutor" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quem será seu guia
          </h2>
          <p className="text-lg text-justify text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conheça quem vai te acompanhar nessa jornada incrível pelo mundo da programação.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-90 md:h-80 rounded-full overflow-hidden border-4 border-purple-200 dark:border-purple-900">
                <img 
                  src="https://henriquesilva.dev/profile_bio.jpeg" 
                  alt="Instrutor do curso"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-purple-600 text-white rounded-full p-4">
                <Award className="h-8 w-8" />
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 lg:pl-8">
            <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">Prof. Henrique Silva</h3>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Mentor apaixonado por tecnologia e educação, com mais de 8 anos de experiência
              em desenvolvendo software.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                  <Briefcase className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Experiência Profissional</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Desenvolvedor sênior em grandes empresas de tecnologia, especializado no
                    desenvolvimento de aplicações web.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                  <GraduationCap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Formação Acadêmica</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                  Cursando Bacharelado em Matemática Aplicada e Computacional – Universidade Federal de Goiás (UFG).
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-purple-50 dark:bg-purple-900/10 rounded-lg border-l-4 border-purple-600 dark:border-purple-400">
              <p className="italic text-gray-700 dark:text-gray-300">
                "Acredito que programação é como uma forma de magia moderna. Minha missão
                é ensinar pessoas a se tornarem verdadeiros 'magos digitais', capazes de
                criar soluções incríveis que impactam o mundo."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;