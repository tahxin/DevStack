import TechCard from './techcard'
import { techStackData } from './techstack'
import type { Tech } from '../../hooks/useStack'

type Props = {
  stack: Tech[]
  onAdd: (tech: Tech) => void
}

export default function Technologies({ stack, onAdd }: Props) {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techStackData.map((tech) => (
          <TechCard
            key={tech.id}
            id={tech.id}
            name={tech.name}
            description={tech.description}
            logo={tech.logo}
            badge={tech.badge}
            tags={tech.tags}
            rating={tech.rating}
            isAdded={stack.some(s => s.id === tech.id)}
            onAdd={onAdd}
          />
        ))}
      </div>
    </div>
  )
}