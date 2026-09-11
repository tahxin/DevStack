import type { Tech } from '../hooks/useStack'

type Props = {
  stack: Tech[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

export default function Mystack({ stack, onRemove, onRemoveAll }: Props) {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-200 w-full md:w-72 h-fit md:sticky md:top-4 p-5 md:mr-4 mt-4 md:shrink-0">

      <h2 className="font-bold text-xl mb-1">Your Stack</h2>

      <p className="text-sm text-base-content/60 mb-4">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 && (
        <div className="border-2 border-dashed border-base-300 rounded-xl p-6 text-center text-base-content/40 text-sm">
          Your stack is empty.
        </div>
      )}

      {stack.map((tech) => (
        <div key={tech.id} className="flex items-center justify-between border border-base-200 rounded-xl p-3 mb-2">
          <div className="flex items-center gap-3">
            <img src={tech.logo} alt={tech.name} className="w-8 h-8 object-contain" />
            <div>
              <p className="font-semibold text-sm">{tech.name}</p>
              <p className="text-xs text-base-content/50">{tech.tags[0]}</p>
            </div>
          </div>
          <button className="btn btn-ghost btn-xs" onClick={() => onRemove(tech.id)}>
            ✕
          </button>
        </div>
      ))}

      {stack.length > 0 && (
        <button className="btn btn-outline btn-error w-full mt-2" onClick={onRemoveAll}>
          Remove All
        </button>
      )}

    </div>
  )
}