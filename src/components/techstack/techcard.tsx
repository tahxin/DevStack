import type { Tech } from '../../hooks/useStack'

export interface TechCardProps {
  id: string
  name: string
  description: string
  logo: string
  badge?: string
  tags: string[]
  rating: number
  isAdded: boolean
  onAdd: (tech: Tech) => void
}

export default function TechCard({ id, name, description, logo, badge, tags, rating, isAdded, onAdd }: TechCardProps) {
  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-md border border-base-200">
      <div className="card-body p-6">

        <div className="flex justify-between items-start mb-2">
          <div className="w-10 h-10 p-1 bg-base-200 rounded-full flex items-center justify-center">
            <img src={logo} alt={name} className="w-full h-full object-contain" />
          </div>
          {badge && (
            <span className="badge badge-info badge-outline text-xs">
              {badge}
            </span>
          )}
        </div>

        <h2 className="card-title text-lg font-bold">{name}</h2>
        <p className="text-sm text-base-content/70 grow">{description}</p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <span key={index} className="badge badge-ghost text-xs">{tag}</span>
            ))}
          </div>
          <div className="font-bold text-sm flex items-center gap-1">
            <span className="text-warning">★</span>
            {rating}
          </div>
        </div>

        <div className="card-actions mt-4">
          <button
            className={`btn w-full rounded-xl transition-all ${
              isAdded
                ? 'btn-success btn-outline cursor-not-allowed opacity-70'
                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none hover:opacity-90'
            }`}
            onClick={() => onAdd({ id, name, logo, tags })}
            disabled={isAdded}
          >
            {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
          </button>
        </div>

      </div>
    </div>
  )
}