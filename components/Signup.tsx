'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function Signup() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    birthdate: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes manejar el envío del formulario
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-100 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-pink-600">Crea tu cuenta</h1>
          <p className="mt-2 text-gray-600">Paso {step} de 3</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <>
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
            </>
          )}
          {step === 2 && (
            <div>
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" name="password" type="password" value={formData.password} onChange={handleChange} required />
            </div>
          )}
          {step === 3 && (
            <div>
              <Label htmlFor="birthdate">Fecha de nacimiento</Label>
              <Input id="birthdate" name="birthdate" type="date" value={formData.birthdate} onChange={handleChange} required />
            </div>
          )}
          <div className="flex justify-between">
            {step > 1 && (
              <Button type="button" onClick={() => setStep(step - 1)} variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Atrás
              </Button>
            )}
            {step < 3 ? (
              <Button type="button" onClick={() => setStep(step + 1)} className="ml-auto">
                Siguiente <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" className="ml-auto bg-pink-500 hover:bg-pink-600">
                Crear cuenta
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
