import { Facebook, Instagram } from 'lucide-react'

const resourceLinks = [
  { href: '#resources', label: 'Emotional Support' },
  { href: '#resources', label: 'Spiritual Care' },
  { href: '#resources', label: 'Safety & Housing' },
  { href: '#resources', label: 'Financial Help' },
]

const orgLinks = [
  { href: '#mission', label: 'About Us' },
  { href: '#process', label: 'How It Works' },
  { href: '#contact', label: 'Contact' },
  { href: '#contact', label: 'Donate' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 lg:max-w-[280px]">
            <div className="font-[family-name:var(--font-display)] text-xl font-bold text-white mb-4">
              <span className="text-primary-light">Restore</span>
              <span className="text-secondary">Hope61</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Restoring hope for widows, children who have lost parents,
              grandparents raising grandchildren, and all who have nowhere else
              to turn.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-[--radius-md] text-gray-400 transition-colors hover:bg-primary hover:text-white"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-[--radius-md] text-gray-400 transition-colors hover:bg-primary hover:text-white"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-3 list-none">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">
              Organization
            </h4>
            <ul className="space-y-3 list-none">
              {orgLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3 list-none">
              <li className="text-sm">Huntsville, Alabama</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-center items-center pt-8 border-t border-gray-800">
          <p className="text-xs max-w-[600px] text-center">
            Disclaimer: Organizations listed here are for informational purposes only. RestoreHope61 is not affiliated with or endorsed by any featured organization, and their inclusion does not imply endorsement.
          </p>
        </div>
      </div>
    </footer>
  )
}
