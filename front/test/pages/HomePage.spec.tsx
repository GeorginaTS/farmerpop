import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter, Link } from 'react-router-dom'
import { HomePage } from '../../src/pages/HomePage'
import { ProductCard } from '../../src/components/ProductCard'
import { SearchBar } from '../../src/components/SearchBar'


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
    test('Component SearchBar  mounts properly', () => {
      const wrapper = render(<SearchBar onSearch={function (keywords: string): void {
        throw new Error('Function not implemented.')
      } } />)
      expect(wrapper).toBeTruthy()
    })
    test('Component Link to product mounts properly', () => {
      const wrapper = render(<Link to={'/product'} />)
      expect(wrapper).toBeTruthy()
    })
    test('Component ProductCard mounts properly', () => {
        const wrapper = render(<ProductCard title={''} price={0} user_id={1}/>)
        expect(wrapper).toBeTruthy()
      })
  })