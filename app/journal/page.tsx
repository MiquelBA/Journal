import React from 'react'
import dynamic from 'next/dynamic'

const Journal = dynamic(() => import('../../components/Journal'), { ssr: false })

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
