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

    test(' title appears', async () => {
      // element is initially not present...
      // wait for appearance inside an assertion
      await waitFor(() => {
        const text = screen.getByText("Anima't", {exact:false})
        expect(text).toBeInTheDocument()
      })
    })
    test('Component SearchBar  mounts properly', () => {
      const wrapper = render(<SearchBar onSearch={function (keywords: string): void {
        throw new Error('Function not implemented.')
      } } />)
      expect(wrapper).toBeTruthy()
    })
    test('Component Link to product mounts properly', () => {
      const wrapper = render(<BrowserRouter><Link to={'/product'} /></BrowserRouter>)
      expect(wrapper).toBeTruthy()
    })
    test('Component ProductCard mounts properly', () => {
        const wrapper = render(<ProductCard title={'Straperlowww product'} price={0} user_id={1}/>)
        expect(wrapper).toBeTruthy()
      })
  })