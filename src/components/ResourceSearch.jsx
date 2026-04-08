import { useState, useMemo } from 'react'
import { Search, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { resourceCategories } from '../lib/data'
import { ResourceCard } from './ResourceCard'

export function ResourceSearch() {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  // Flatten all resources with their category info
  const allResources = useMemo(() => {
    const resources = []
    resourceCategories.forEach((category) => {
      category.resources.forEach((resource) => {
        resources.push({
          ...resource,
          categoryId: category.id,
          categoryLabel: category.label,
          categoryKeywords: category.keywords || [],
        })
      })
    })
    return resources
  }, [])

  // Search logic
  const searchResults = useMemo(() => {
    if (!query.trim()) return []

    const searchTerms = query.toLowerCase().split(/\s+/)
    
    const scored = allResources.map((resource) => {
      let score = 0
      const searchableText = [
        resource.title,
        resource.services,
        resource.type,
        resource.bestFor,
        ...(resource.keywords || []),
        ...resource.categoryKeywords,
        resource.categoryLabel,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      searchTerms.forEach((term) => {
        // Exact word match in title - highest score
        if (resource.title.toLowerCase().includes(term)) {
          score += 10
        }
        // Match in keywords - high score
        if (resource.keywords?.some((k) => k.toLowerCase().includes(term))) {
          score += 8
        }
        // Match in category keywords
        if (resource.categoryKeywords.some((k) => k.toLowerCase().includes(term))) {
          score += 5
        }
        // Match in services
        if (resource.services?.toLowerCase().includes(term)) {
          score += 4
        }
        // Match anywhere
        if (searchableText.includes(term)) {
          score += 2
        }
      })

      return { resource, score }
    })

    // Filter, sort, and deduplicate by title (keep highest scored version)
    const seen = new Set()
    return scored
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .filter((item) => {
        if (seen.has(item.resource.title)) {
          return false
        }
        seen.add(item.resource.title)
        return true
      })
      .slice(0, 9) // Show top 9 results (3x3 grid)
      .map((item) => item.resource)
  }, [query, allResources])

  const handleClear = () => {
    setQuery('')
  }

  const quickSearches = [
    { label: 'Widow Support', query: 'widow' },
    { label: 'Food', query: 'food' },
    { label: 'Housing', query: 'housing' },
    { label: 'Counseling', query: 'counseling' },
    { label: 'Legal Help', query: 'legal' },
    { label: 'Jobs', query: 'job employment' },
    { label: 'Childcare', query: 'childcare' },
  ]

  return (
    <section id="search" className="py-16 bg-white">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Header */}
        <header className="text-center max-w-[600px] mx-auto mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">
            Quick Search
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-4xl font-semibold tracking-tight mb-4 text-gray-900">
            What Do You Need Help With?
          </h2>
          <p className="text-lg text-gray-500">
            Type what you're looking for and we'll find matching resources.
          </p>
        </header>

        {/* Search Input */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsOpen(true)}
              placeholder="Try: food, housing, counseling, legal help, jobs..."
              className={cn(
                'w-full pl-12 pr-12 py-4 text-lg',
                'bg-gray-50 border border-gray-200 rounded-full',
                'placeholder:text-gray-400',
                'focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary',
                'transition-all duration-200'
              )}
            />
            {query && (
              <button
                onClick={handleClear}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            )}
          </div>
        </div>

        {/* Quick Search Buttons */}
        {!query && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {quickSearches.map((item) => (
              <button
                key={item.label}
                onClick={() => setQuery(item.query)}
                className={cn(
                  'px-4 py-2 text-sm font-medium',
                  'bg-gray-100 text-gray-700 rounded-full',
                  'hover:bg-primary hover:text-white',
                  'transition-all duration-200'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

        {/* Search Results */}
        {query && (
          <div className="animate-fade-in">
            {searchResults.length > 0 ? (
              <>
                <p className="text-center text-gray-500 mb-6">
                  Found {searchResults.length} resource{searchResults.length !== 1 ? 's' : ''} for "{query}"
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchResults.map((resource) => (
                    <div key={`${resource.categoryId}-${resource.title}`} className="relative">
                      <span className="absolute -top-2 -right-2 px-2 py-1 text-xs font-medium bg-secondary text-white rounded-full z-10">
                        {resource.categoryLabel}
                      </span>
                      <ResourceCard {...resource} />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">
                  No resources found for "{query}"
                </p>
                <p className="text-gray-400 text-sm">
                  Try different keywords or browse the categories below
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
