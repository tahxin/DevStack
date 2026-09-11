import { useState } from 'react'
import { toast } from 'react-toastify'

export type Tech = {
  id: string
  name: string
  icon: string
  category: string
}

export function useStack() {
  const [stack, setStack] = useState<Tech[]>([])

  function addToStack(tech: Tech) {
    const exists = stack.some(item => item.id === tech.id)
    if (exists) {
      toast.warn(`${tech.name} is already in your stack!`, { toastId: `dup-${tech.id}` })
      return
    }
    setStack(prev => [...prev, tech])
    toast.success(`${tech.name} added to your stack!`)
  }

  function removeFromStack(id: string, name?: string) {
    setStack(prev => prev.filter(item => item.id !== id))
    toast.info(`${name ?? 'Technology'} removed from your stack.`)
  }

  function clearStack() {
    setStack([])
    toast.error('All technologies removed from your stack.')
  }

  return { stack, addToStack, removeFromStack, clearStack }
}
