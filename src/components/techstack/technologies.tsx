import { useState, useEffect } from 'react'
import TechCard from './techcard'
import type { Tech } from '../../hooks/useStack'

interface TechData {
  id: string
  name: string
  category: string
  description: string
  icon: string
  rating: number
  difficulty: string
  badge?: string
}

type Props = {
  stack: Tech[]
  onAdd: (tech: Tech) => void
}

export default function Technologies({ stack, onAdd }: Props) {
  const [techs, setTechs] = useState<TechData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/techstack.json')
      .then((res) => res.json())
      .then((data: TechData[]) => {
        setTechs(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center w-full py-24 gap-4">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-base-content/50 text-sm">Loading technologies…</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techs.map((tech) => (
          <TechCard
            key={tech.id}
            id={tech.id}
            name={tech.name}
            description={tech.description}
            icon={tech.icon}
            badge={tech.badge}
            category={tech.category}
            difficulty={tech.difficulty}
            rating={tech.rating}
            isAdded={stack.some((s) => s.id === tech.id)}
            onAdd={onAdd}
          />
        ))}
      </div>
    </div>
  )
}