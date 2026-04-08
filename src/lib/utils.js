import { clsx } from 'clsx'

/**
 * Merge class names with clsx
 */
export function cn(...inputs) {
  return clsx(inputs)
}
