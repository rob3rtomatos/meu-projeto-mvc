'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">🔒 HTTPS Seguro</h1>
        <p className="text-xl mb-8 text-blue-100">
          Website rodando com certificado SSL em desenvolvimento
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/products"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
          >
            Explorar Produtos
          </Link>
          <Link
            href="/about"
            className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition"
          >
            Sobre Nós
          </Link>
        </div>
      </div>
    </div>
  );
}
