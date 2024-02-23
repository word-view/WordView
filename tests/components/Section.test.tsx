import * as React from 'react'
import renderer from 'react-test-renderer'
import { Section } from '../../components'

it(`Section renders`, () => {
  const tree = renderer
    .create(<Section title='Test Section' description='Test description' children={<></>} />)
    .toJSON()
  expect(tree).toBeDefined()
})
