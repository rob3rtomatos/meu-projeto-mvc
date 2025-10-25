export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-bold mb-4">ModernApp</h4>
            <p className="text-gray-400">Website moderno com Next.js</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/products" className="hover:text-white transition">Produtos</a></li>
              <li><a href="/about" className="hover:text-white transition">Sobre</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <p className="text-gray-400">Email: contato@modernapp.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {year} ModernApp. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
