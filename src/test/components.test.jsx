import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'

describe('Footer Component', () => {
  it('should display the correct disclaimer text', () => {
    render(<Footer />)
    
    const disclaimer = screen.getByText(/Disclaimer: Organizations listed here are for informational purposes only/i)
    expect(disclaimer).toBeInTheDocument()
    
    // Check for full disclaimer text
    expect(disclaimer.textContent).toContain('RestoreHope61 is not affiliated with or endorsed by any featured organization')
    expect(disclaimer.textContent).toContain('their inclusion does not imply endorsement')
  })

  it('should NOT display old disclaimer text', () => {
    render(<Footer />)
    
    // Make sure old text is NOT present
    const oldText = screen.queryByText(/Resource information is provided as a guide/i)
    expect(oldText).not.toBeInTheDocument()
    
    const oldText2 = screen.queryByText(/Please verify availability directly with organizations/i)
    expect(oldText2).not.toBeInTheDocument()
    
    const oldText3 = screen.queryByText(/Last updated February 2025/i)
    expect(oldText3).not.toBeInTheDocument()
  })
})

describe('Hero Component', () => {
  it('should display "Local Organizations" not "Local Partners"', () => {
    render(<Hero />)
    
    const organizations = screen.getByText(/Local Organizations/i)
    expect(organizations).toBeInTheDocument()
    
    // Make sure old text is NOT present
    const partners = screen.queryByText(/Local Partners/i)
    expect(partners).not.toBeInTheDocument()
  })

  it('should NOT display 24/7 Crisis Support', () => {
    render(<Hero />)
    
    const crisisSupport = screen.queryByText(/24\/7/i)
    expect(crisisSupport).not.toBeInTheDocument()
    
    const crisisText = screen.queryByText(/Crisis Support/i)
    expect(crisisText).not.toBeInTheDocument()
  })

  it('should NOT display 501(c)(3) Non-Profit Ministry badge', () => {
    render(<Hero />)
    
    const badge = screen.queryByText(/501\(c\)\(3\) Non-Profit Ministry/i)
    expect(badge).not.toBeInTheDocument()
    
    const huntsville = screen.queryByText(/Huntsville, AL/i)
    expect(huntsville).not.toBeInTheDocument()
  })

  it('should display the main title', () => {
    render(<Hero />)
    
    const title = screen.getByText(/Restoring/i)
    expect(title).toBeInTheDocument()
    
    const hope = screen.getByText(/Hope/i)
    expect(hope).toBeInTheDocument()
  })
})
