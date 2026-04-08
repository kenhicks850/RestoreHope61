import { useState } from 'react'
import { cn } from '../lib/utils'
import { resourceCategories } from '../lib/data'
import { ResourceCard } from './ResourceCard'

export function Resources() {
  const [activeTab, setActiveTab] = useState('emotional')

  const activeCategory = resourceCategories.find((cat) => cat.id === activeTab)

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Header */}
        <header className="text-center max-w-[600px] mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">
            Community Resources
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-4xl font-semibold tracking-tight mb-4 text-gray-900">
            Find the Help You Need
          </h2>
          <p className="text-lg text-gray-500">
            Explore our curated directory of local resources organized by your
            specific needs.
          </p>
        </header>

        {/* Tabs */}
        <div
          className="flex flex-nowrap lg:flex-wrap lg:justify-center gap-2 mb-10 p-2 bg-white rounded-full shadow-sm overflow-x-auto scrollbar-none"
          role="tablist"
        >
          {resourceCategories.map((category) => (
            <button
              key={category.id}
              role="tab"
              aria-selected={activeTab === category.id}
              onClick={() => setActiveTab(category.id)}
              className={cn(
                'px-5 py-3 text-sm font-medium whitespace-nowrap',
                'rounded-full transition-all duration-150',
                'cursor-pointer',
                activeTab === category.id
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:text-primary hover:bg-gray-100'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        {activeCategory && (
          <div className="animate-fade-in" key={activeCategory.id}>
            {/* Panel header */}
            <div className="mb-8">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-2 text-gray-900">
                {activeCategory.title}
              </h3>
              <p className="text-gray-500">{activeCategory.description}</p>
            </div>

            {/* Resource cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCategory.resources.map((resource) => (
                <ResourceCard key={resource.title} {...resource} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
