import type { Tech } from '../../hooks/useStack'

export interface TechCardProps {
  id: string
  name: string
  description: string
  icon: string
  badge?: string
  category: string
  difficulty: string
  rating: number
  isAdded: boolean
  onAdd: (tech: Tech) => void
}

export default function TechCard({
  id,
  name,
  description,
  icon,
  badge,
  category,
  difficulty,
  rating,
  isAdded,
  onAdd,
}: TechCardProps) {
  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-md border border-base-200">
      <div className="card-body p-6">

        {/* Icon + Badge row */}
        <div className="flex justify-between items-start mb-2">
          <div className="w-10 h-10 p-1 bg-base-200 rounded-full flex items-center justify-center">
            <img src={icon} alt={name} className="w-full h-full object-contain" />
          </div>
          {badge && (
            <span className="badge badge-info badge-outline text-xs">
              {badge}
            </span>
          )}
        </div>

        <h2 className="card-title text-lg font-bold">{name}</h2>
        <p className="text-sm text-base-content/70 grow">{description}</p>

        {/* Category + Difficulty row */}
        <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
          <span className="badge badge-ghost text-xs">{category}</span>
          <span className="text-xs text-base-content/50 font-medium">{difficulty}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1">
          <span className="text-warning">★</span>
          <span className="font-bold text-sm">{rating}</span>
        </div>

        {/* Add to Stack button */}
        <div className="card-actions mt-4">
          <button
            className={`btn w-full rounded-xl transition-all ${
              isAdded
                ? 'btn-success btn-outline cursor-not-allowed opacity-70'
                : 'btn-brand'
            }`}
            onClick={() => onAdd({ id, name, icon, category })}
            disabled={isAdded}
          >
            {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
          </button>
        </div>

      </div>
    </div>
  )
}