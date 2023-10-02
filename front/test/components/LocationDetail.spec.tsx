import { describe, test, expect, beforeEach } from 'vitest'
import { render } from '@testing-library/react'

import { LocationDetail } from '../../src/components/LocationDetail'

describe('MYLOCATION COMPONENT', () => {
    test('Component MyLocation mounts properly', () => {
        const wrapper = render(<LocationDetail lat={'40.1234'} lng={'-3.3002'} />)
        expect(wrapper).toBeTruthy()
      })
})