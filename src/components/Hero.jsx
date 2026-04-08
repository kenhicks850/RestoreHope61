import { ButtonLink } from './Button'

const stats = [
  { value: '10', label: 'Resource Categories' },
  { value: '50+', label: 'Local Organizations' },
]

export function Hero({ watermarkUrl }) {
  return (
    <section className="relative pt-[calc(72px+4rem)] pb-20 bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-crosses" />
      
      {/* Watermark */}
      {watermarkUrl && (
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-15 pointer-events-none"
          style={{ backgroundImage: `url(${watermarkUrl})` }}
        />
      )}

      <div className="relative z-10 max-w-[1140px] mx-auto px-6">
        <div className="max-w-[720px]">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-6 text-white">
            Restoring <span className="text-secondary">Hope</span> for Those Who Need It Most
          </h1>

          {/* Description */}
          <p className="text-xl leading-relaxed text-white/85 mb-8">
            We exist to restore hope for widows, children who have lost parents,
            grandparents raising their grandchildren, and others who have nowhere
            else to turn.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="#contact" variant="secondary" size="lg">
              Request Help
            </ButtonLink>
            <ButtonLink href="#resources" variant="white-ghost" size="lg">
              Browse Resources
            </ButtonLink>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16 pt-10 border-t border-white/15 max-w-md sm:max-w-lg mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-[family-name:var(--font-display)] text-4xl font-bold text-secondary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
