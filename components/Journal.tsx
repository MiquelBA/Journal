import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent } from './ui/card'

interface JournalEntry {
  id: number
  date: string
  content: string
}

export default function Journal() {
  const [entries, setEntries] = useState<JournalEntry[]>([])
  const [newEntry, setNewEntry] = useState('')

  const addEntry = () => {
    if (newEntry.trim() !== '') {
      const entry: JournalEntry = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        content: newEntry
      }
      setEntries([entry, ...entries])
      setNewEntry('')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <Input
          type="text"
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          placeholder="Escribe tu entrada de diario aquí..."
          className="flex-grow"
        />
        <Button onClick={addEntry}>Añadir entrada</Button>
      </div>

      {entries.length === 0 ? (
        <p className="text-gray-500 italic">No hay entradas en el diario aún. ¡Comienza a escribir tu primera entrada!</p>
      ) : (
        <div className="space-y-4">
          {entries.map((entry) => (
            <Card key={entry.id}>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500 mb-2">{entry.date}</p>
                <p>{entry.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
