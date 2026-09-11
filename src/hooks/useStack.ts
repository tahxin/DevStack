import { useState } from 'react'

export type Tech = {
  id: string
  name: string
  logo: string
  tags: string[]
}

export function useStack() {
  const [stack, setStack] = useState<Tech[]>([])

  function addToStack(tech: Tech) {
    const exists = stack.some(item => item.id === tech.id)
    if (!exists) {
      setStack(prev => [...prev, tech])
    }
  }

  function removeFromStack(id: string) {
    setStack(prev => prev.filter(item => item.id !== id))
  }

  function clearStack() {
    setStack([])
  }

  return { stack, addToStack, removeFromStack, clearStack }
}
