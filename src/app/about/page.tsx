export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Sobre ModernApp</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Nossa Missão</h2>
          <p className="text-gray-700 mb-4">
            Criamos soluções web modernas e eficientes utilizando as tecnologias mais recentes
            do mercado. Nosso objetivo é fornecer websites de alta qualidade com excelente
            experiência do usuário.
          </p>
          <p className="text-gray-700">
            Acreditamos na importância de código limpo, performance e accessibility em todos
            os nossos projetos.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Tecnologias</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Next.js 15 - Framework React moderno
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              TypeScript - Type safety
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Tailwind CSS - Styling moderno
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              API Routes - Backend integrado
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Por que nos escolher?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Performance</h3>
            <p className="text-gray-700">Websites otimizados para velocidade máxima</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Design Moderno</h3>
            <p className="text-gray-700">Interface limpa e responsiva</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Segurança</h3>
            <p className="text-gray-700">Melhores práticas implementadas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
