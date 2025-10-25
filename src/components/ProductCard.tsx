import { Product } from '@/types';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-48 flex items-center justify-center">
        <div className="text-white text-6xl">{product.image}</div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">
            R$ {product.price.toFixed(2)}
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
