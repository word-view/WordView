import * as React from 'react'
import renderer from 'react-test-renderer'
import { Section } from '../../components'
import { testing } from '../../storage/store/state'

beforeEach(() => testing.set(true))

it(`Section renders`, () => {
  const tree = renderer
    .create(<Section title='Test Section' description='Test description' children={<></>} />)
    .toJSON()
  expect(tree).toBeDefined()
})
