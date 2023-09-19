import { describe, test, expect, beforeEach } from 'vitest'
import { render} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ProductCard } from '../../src/components/ProductCard'
import { LandingPage } from '../../src/pages/LandingPage'
import { Container } from 'react-bootstrap'


describe('LANDING PAGE', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>
      )
    })

    // test('renders title', () => {
    //     const title = screen.getByText(/productes frescos/i)
    //     expect(title).toBeInTheDocument()
    // })
    test('Component Container mounts properly', () => {
        const wrapper = render(<Container />)
        expect(wrapper).toBeTruthy()
      })
  })