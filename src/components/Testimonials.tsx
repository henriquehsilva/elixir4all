import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Lucas S.',
      age: 14,
      content: 'Nunca imaginei que programação poderia ser tão divertida! As aulas são super dinâmicas e os exemplos fazem eu entender tudo muito fácil.',
      rating: 5,
      image: 'https://images.pexels.com/photos/5082976/pexels-photo-5082976.jpeg'
    },
    {
      name: 'Julia M.',
      age: 16,
      content: 'Já tinha tentado aprender outras linguagens antes, mas com Elixir e o jeito que o curso explica, finalmente consegui entender programação de verdade!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg'
    },
    {
      name: 'Gabriel L.',
      age: 18,
      content: 'O curso é incrível! Consegui criar meu primeiro projeto em menos de um mês e até mostrei para meus amigos da escola. Todos ficaram impressionados.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
    }
  ];

  const screenshots = [
    {
      title: 'Aula sobre Recursão',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg'
    },
    {
      title: 'Projeto de Jogo Simples',
      image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg'
    },
    {
      title: 'Exercício Coding Dojo',
      image: 'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que dizem nossos alunos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experiências reais de jovens que transformaram sua relação com a tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.age} anos</p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-6">
            Veja o curso em ação
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <img 
                src={screenshot.image} 
                alt={screenshot.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-gray-50 dark:bg-gray-700">
                <h4 className="font-medium text-center">{screenshot.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;