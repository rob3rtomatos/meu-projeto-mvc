import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">✅ HTTPS Funcionando!</h2>
          <p className="text-gray-700">
            Seu website está rodando com HTTPS em desenvolvimento usando certificado SSL local.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">HTTPS Seguro</h3>
            <p className="text-gray-600">Conexão criptografada em desenvolvimento</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Next.js 15</h3>
            <p className="text-gray-600">Framework React moderno</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Tailwind CSS</h3>
            <p className="text-gray-600">Design responsivo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
