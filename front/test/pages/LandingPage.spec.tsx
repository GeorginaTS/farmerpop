import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen} from '@testing-library/react'
import { BrowserRouter, Link } from 'react-router-dom'
import { LandingPage } from '../../src/pages/LandingPage'



describe('LANDING PAGE', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>
      )
    })

     test('renders title', () => {
          const title =  screen.getByText('Gaudeix i menja sa', {exact: false})
          expect(title).toBeInTheDocument()
     })
     test('Component Link to product mounts properly', () => {
      const wrapper = render(<BrowserRouter><Link to={'/home'} /></BrowserRouter>)
      expect(wrapper).toBeTruthy()
    })
  })