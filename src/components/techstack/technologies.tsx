
import TechCard from './techcard';
import { techStackData } from './techstack';

export default function Technologies() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techStackData.map((tech) => (
          <TechCard
            key={tech.id}
            name={tech.name}
            description={tech.description}
            logo={tech.logo}
            badge={tech.badge}
            tags={tech.tags}
            rating={tech.rating}
          />
        ))}
      </div>
    </div>
  );
}