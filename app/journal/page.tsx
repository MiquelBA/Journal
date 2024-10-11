import React from 'react'
import Journal from '../../components/Journal'

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-pink-600 mb-6">Tu Diario</h1>
        <Journal />
      </div>
    </div>
  )
}
