import { cn } from '../lib/utils'

export function ResourceCard({
  title,
  type,
  services,
  bestFor,
  contact,
}) {
  return (
    <article
      className={cn(
        'bg-white rounded-[--radius-lg] p-6',
        'border border-gray-200',
        'transition-all duration-200',
        'hover:border-gray-300 hover:shadow-lg hover:-translate-y-0.5'
      )}
    >
      {/* Header */}
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      </div>

      {/* Info rows */}
      <div className="flex flex-col gap-3">
        {type && (
          <div className="flex gap-3">
            <span className="shrink-0 w-20 text-sm font-semibold text-gray-500">
              Type
            </span>
            <span className="text-sm text-gray-700">{type}</span>
          </div>
        )}
        {services && (
          <div className="flex gap-3">
            <span className="shrink-0 w-20 text-sm font-semibold text-gray-500">
              Services
            </span>
            <span className="text-sm text-gray-700">{services}</span>
          </div>
        )}
        {bestFor && (
          <div className="flex gap-3">
            <span className="shrink-0 w-20 text-sm font-semibold text-gray-500">
              Best For
            </span>
            <span className="text-sm text-gray-700">{bestFor}</span>
          </div>
        )}
        {contact && (
          <div className="flex gap-3">
            <span className="shrink-0 w-20 text-sm font-semibold text-gray-500">
              Contact
            </span>
            <span className="text-sm text-gray-700">{contact}</span>
          </div>
        )}
      </div>
    </article>
  )
}

export function AdditionalResources({ title, items }) {
  return (
    <div className="bg-white rounded-[--radius-lg] p-6 border border-gray-200">
      <h4 className="text-lg font-semibold mb-4 pb-4 border-b border-gray-200">
        {title}
      </h4>
      <ul className="grid sm:grid-cols-2 gap-3 list-none">
        {items.map((item) => (
          <li
            key={item}
            className="p-3 bg-gray-50 rounded-[--radius-md] text-sm text-gray-600"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
