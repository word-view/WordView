import * as React from 'react'
import renderer from 'react-test-renderer'
import { HorizontalScrollView } from '../../components'

it(`HorizontalScrollView renders`, () => {
  const tree = renderer.create(<HorizontalScrollView children={<></>} />).toJSON()
  expect(tree).toBeDefined()
})
