import { describe, test, expect, beforeEach } from 'vitest'
import { render } from '@testing-library/react'

import { MyLocation } from "../../src/components/MyLocation"

describe('MYLOCATION COMPONENT', () => {
    test('Component MyLocation mounts properly', () => {
        const wrapper = render(<MyLocation />)
        expect(wrapper).toBeTruthy()
      })
})