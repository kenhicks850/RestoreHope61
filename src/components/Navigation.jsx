import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { ButtonLink } from './Button'

const navLinks = [
  { href: '#mission', label: 'About' },
  { href: '#resources', label: 'Resources' },
  { href: '#process', label: 'How It Works' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'bg-white/95 backdrop-blur-sm',
        'border-b border-gray-200',
        'transition-shadow duration-200',
        isScrolled && 'shadow-md'
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a
            href="#"
            className="font-[family-name:var(--font-display)] text-xl font-bold"
          >
            <span className="text-primary">Restore</span>
            <span className="text-secondary">Hope61</span>
          </a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="nav-menu"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      'text-sm font-medium text-gray-600',
                      'relative transition-colors',
                      'hover:text-primary',
                      'after:content-[""] after:absolute after:-bottom-1 after:left-0',
                      'after:w-0 after:h-0.5 after:bg-secondary',
                      'after:transition-[width] after:duration-200',
                      'hover:after:w-full'
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <ButtonLink href="#contact" variant="ghost" size="sm">
                Get Help
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary" size="sm">
                Donate
              </ButtonLink>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            id="nav-menu"
            className={cn(
              'lg:hidden',
              'fixed top-[72px] left-0 right-0 bottom-0',
              'bg-white p-6 overflow-y-auto',
              'transition-transform duration-200',
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            )}
          >
            <ul className="flex flex-col gap-1 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      'block p-4 text-lg font-medium text-gray-600',
                      'rounded-[--radius-md] transition-colors',
                      'hover:bg-gray-100 hover:text-primary'
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-gray-200">
              <ButtonLink
                href="#contact"
                variant="ghost"
                size="md"
                onClick={closeMenu}
                className="w-full justify-center"
              >
                Get Help
              </ButtonLink>
              <ButtonLink
                href="#contact"
                variant="secondary"
                size="md"
                onClick={closeMenu}
                className="w-full justify-center"
              >
                Donate
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
