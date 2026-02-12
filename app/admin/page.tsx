'use client'

import { useEffect } from 'react'

export default function AdminPage() {
  useEffect(() => {
    // Redirect to TinaCloud editor
    window.location.href = `https://app.tina.io/projects/73bc2752-c82f-4e9d-8a8a-dcc19ff5a760/configuration`
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to TinaCMS...</h1>
        <p className="text-gray-600">
          If not redirected, <a href="https://app.tina.io" className="text-blue-600 underline">click here</a>
        </p>
      </div>
    </div>
  )
}
