'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
            <span className="text-xl font-bold">ModernApp</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
            <Link href="/products" className="hover:text-blue-400 transition">Produtos</Link>
            <Link href="/about" className="hover:text-blue-400 transition">Sobre</Link>
            <Link href="/dashboard" className="hover:text-blue-400 transition">Dashboard</Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-2xl"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 hover:text-blue-400">Home</Link>
            <Link href="/products" className="block py-2 hover:text-blue-400">Produtos</Link>
            <Link href="/about" className="block py-2 hover:text-blue-400">Sobre</Link>
            <Link href="/dashboard" className="block py-2 hover:text-blue-400">Dashboard</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
