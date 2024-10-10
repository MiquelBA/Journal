import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { BookHeart, Sparkles, MessageCircleHeart, Feather } from 'lucide-react'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-100">
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
  )
}