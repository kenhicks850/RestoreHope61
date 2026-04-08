import { cn } from '../lib/utils'
import { processSteps } from '../lib/data'

export function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Header */}
        <header className="text-center max-w-[600px] mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">
            How It Works
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-4xl font-semibold tracking-tight mb-4 text-gray-900">
            Your Journey to Restoration
          </h2>
          <p className="text-lg text-gray-500">
            We meet you where you are and walk with you through each stage.
          </p>
        </header>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-gray-200" />
          
          {/* Connecting line - mobile */}
          <div className="lg:hidden absolute top-0 bottom-0 left-10 w-0.5 bg-gray-200" />

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-8">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className={cn(
                  'relative',
                  'lg:text-center',
                  'grid grid-cols-[80px_1fr] lg:grid-cols-1 gap-6 lg:gap-0 items-start lg:items-center'
                )}
              >
                {/* Number */}
                <div
                  className={cn(
                    'relative z-10',
                    'w-20 h-20 flex items-center justify-center',
                    'bg-primary text-white',
                    'font-[family-name:var(--font-display)] text-2xl font-bold',
                    'rounded-full',
                    'lg:mx-auto lg:mb-6'
                  )}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className="pt-4 lg:pt-0">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
