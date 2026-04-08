import { cn } from '../lib/utils'

const variants = {
  primary: 'bg-primary text-white border-primary hover:bg-primary-light hover:border-primary-light',
  secondary: 'bg-secondary text-gray-900 border-secondary hover:bg-secondary-light hover:border-secondary-light',
  ghost: 'bg-transparent text-primary border-primary hover:bg-primary hover:text-white',
  'white-ghost': 'bg-transparent text-white border-white hover:bg-white hover:text-primary',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2',
        'font-semibold leading-snug',
        'border-2 rounded-[--radius-md]',
        'cursor-pointer transition-all duration-200',
        'hover:-translate-y-0.5 hover:shadow-md',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export function ButtonLink({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2',
        'font-semibold leading-snug no-underline',
        'border-2 rounded-[--radius-md]',
        'cursor-pointer transition-all duration-200',
        'hover:-translate-y-0.5 hover:shadow-md',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}
