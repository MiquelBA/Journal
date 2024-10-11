import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { BookHeart, Sparkles, MessageCircleHeart, Feather } from 'lucide-react'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-pink-600 mb-4">FemmeJournal</h1>
          <p className="text-xl text-gray-600">Tu espacio personal para la reflexión y el crecimiento</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardContent>
              <div className="flex items-center mb-4">
                <BookHeart className="h-8 w-8 text-pink-500 mr-2" />
                <h2 className="text-2xl font-semibold text-gray-800">Captura tu viaje</h2>
              </div>
              <p className="text-gray-600">Registra tus pensamientos, sentimientos y experiencias en un hermoso espacio privado.</p>
            </CardContent>
          </Card>
          {/* Añade más Cards aquí para las otras características */}
        </div>

        <div className="text-center space-y-4">
          <Button asChild className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg shadow-lg transform transition-all hover:scale-105">
            <Link href="/signup">Comienza tu viaje</Link>
          </Button>
          <p className="text-gray-600">
            ¿Ya tienes una cuenta?{' '}
            <Link href="/signin" className="text-pink-600 hover:underline">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
