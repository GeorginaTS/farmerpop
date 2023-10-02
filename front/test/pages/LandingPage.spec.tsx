import { describe, test, expect, beforeEach } from 'vitest'
import { render} from '@testing-library/react'
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

    // test('renders title', () => {
    //      const title = screen.getByText(/productes frescos/i)
    //      expect(title).toBeInTheDocument()
    // })
    test('Component Link to home mounts properly', () => {
        const wrapper = render(<Link to={'/home'} />)
        expect(wrapper).toBeTruthy()
      })
  })