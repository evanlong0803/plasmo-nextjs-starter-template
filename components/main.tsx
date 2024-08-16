'use client'

import { useState } from 'react'

export function Main({ name = 'Extension' }) {
  const [data, setData] = useState('')

  return (
    <div className="w-28">
      <h1>
        Welcome to your <a href="https://www.plasmo.com">Plasmo</a> {name}!
      </h1>
      <input onChange={(e) => setData(e.target.value)} value={data} />

      <a href="https://docs.plasmo.com">READ THE DOCS!</a>
    </div>
  )
}
