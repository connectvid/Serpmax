'use client'

import { useEffect, useState } from 'react'

export default function AdminPage() {
  const [tinaRunning, setTinaRunning] = useState<boolean | null>(null)

  useEffect(() => {
    // Check if TinaCMS server is running
    fetch('http://localhost:4001/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: '{ __typename }' }),
    })
      .then((res) => setTinaRunning(res.ok))
      .catch(() => setTinaRunning(false))
  }, [])

  if (tinaRunning === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-xl font-semibold mb-4">Loading TinaCMS...</h1>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        </div>
      </div>
    )
  }

  if (!tinaRunning) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-red-600">TinaCMS Not Running</h1>
          <p className="text-gray-600 mb-6">
            The TinaCMS dev server is not available. Please start it with:
          </p>
          <code className="bg-gray-900 text-green-400 px-4 py-2 rounded block font-mono">
            npm run dev
          </code>
          <p className="text-gray-500 mt-4 text-sm">
            This will start both Next.js and TinaCMS servers together.
          </p>
        </div>
      </div>
    )
  }

  // TinaCMS is running - redirect to the admin panel
  return (
    <iframe
      src="http://localhost:4001/admin/"
      className="w-full h-screen border-0"
      title="TinaCMS Admin"
    />
  )
}
