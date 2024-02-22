import * as React from 'react'
import renderer from 'react-test-renderer'
import { testing } from '../../storage/store/state'
import { ContentHolder } from '../../components'

beforeEach(() => testing.set(true))

it(`ContentHolder renders`, () => {
  const tree = renderer.create(<ContentHolder title='Test ContentHolder' children={<></>} />).toJSON()
  expect(tree).toBeDefined()
})
