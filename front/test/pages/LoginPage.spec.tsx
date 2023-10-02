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

    test('Contain title contrasenya', () => {
      
        const text =screen.getByText('Contrasenya:')
        expect(text).toBeInTheDocument()
    })
    test('Contain text Correu electrònic', () => {
      const text = screen.getByText('Correu electrònic:')
      expect(text).toBeInTheDocument()
  })

  })