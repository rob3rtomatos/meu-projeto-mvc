'use client';

import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';

export default function Products() {
  const products: Product[] = [
    {
      id: 1,
      name: 'Produto Premium',
      description: 'Qualidade superior com tecnologia de ponta',
      price: 299.99,
      image: '⭐',
    },
    {
      id: 2,
      name: 'Produto Standard',
      description: 'Excelente custo-benefício para todos',
      price: 149.99,
      image: '📦',
    },
    {
      id: 3,
      name: 'Produto Pro',
      description: 'Para profissionais que exigem o melhor',
      price: 499.99,
      image: '🚀',
    },
    {
      id: 4,
      name: 'Produto Basic',
      description: 'Perfeito para iniciantes',
      price: 79.99,
      image: '🎯',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Nossos Produtos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
