import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HomePage } from '../../src/pages/HomePage'
import { ProductCard } from '../../src/components/ProductCard'


describe('HOMEPAGE', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      )
    })

    // test('renders title', () => {
    //     const title = screen.getByText(/productes frescos/i)
    //     expect(title).toBeInTheDocument()
    // })
    test('Component ProductCard mounts properly', () => {
        const wrapper = render(<ProductCard title={''} price={0} />)
        expect(wrapper).toBeTruthy()
      })
  })