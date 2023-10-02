import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen} from '@testing-library/react'
import { BrowserRouter, Form, Link } from 'react-router-dom'
import { LandingPage } from '../../src/pages/LandingPage'
import { LoginPage } from '../../src/pages/LoginPage'



describe('LANDING PAGE', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      )
    })

    test('Component Form mounts properly', () => {
        const input = screen.getByLabelText('Correu electrònic')
    })

  })