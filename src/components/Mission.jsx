import { Heart, Users, Smile, UsersRound } from 'lucide-react'
import { cn } from '../lib/utils'
import { missionCards } from '../lib/data'

const iconMap = {
  Heart,
  Users,
  Smile,
  UsersRound,
}

function MissionCard({ icon, title, description }) {
  const Icon = iconMap[icon]
  
  return (
    <div
      className={cn(
        'p-6 bg-gray-50 rounded-[--radius-lg]',
        'border border-gray-200',
        'transition-all duration-200',
        'hover:-translate-y-1 hover:shadow-lg hover:border-secondary'
      )}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-[--radius-md] mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-2 text-gray-900">
        {title}
      </h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  )
}

export function Mission() {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="lg:max-w-[480px]">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">
              Our Mission
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-4xl font-semibold tracking-tight mb-6 text-gray-900">
              A Connection Point for Hope
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              RestoreHope61 exists to restore hope for widows, children who have
              lost parents, grandparents raising their grandchildren, and others
              who have nowhere else to turn. We also serve as a connection point
              between those in need and the comprehensive network of resources
              available throughout the Huntsville community.
            </p>
            <blockquote className="font-[family-name:var(--font-display)] text-lg italic text-gray-500 pl-6 border-l-[3px] border-secondary">
              "To comfort all who mourn, to provide for those who grieve... to
              bestow on them a crown of beauty instead of ashes."
              <cite className="block mt-2 not-italic text-base">— Isaiah 61:2-3</cite>
            </blockquote>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-4">
            {missionCards.map((card) => (
              <MissionCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
