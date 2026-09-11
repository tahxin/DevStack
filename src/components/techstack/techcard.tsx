

export interface TechCardProps {
  name: string;
  description: string;
  logo: string;
  badge?: string;
  tags: string[];
  rating: number;
}

export default function TechCard({ name, description, logo, badge, tags, rating }: TechCardProps) {
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
        <p className="text-sm text-base-content/70 grow">
          {description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="badge badge-ghost text-xs">
                {tag}
              </span>
            ))}
          </div>
          <div className="font-bold text-sm flex items-center gap-1">
            <span className="text-warning">★</span>
            {rating}
          </div>
        </div>

        <div className="card-actions mt-4">
          <button className="btn btn-neutral w-full rounded-xl">
            Add to Stack
          </button>
        </div>
        
      </div>
    </div>
  );
}