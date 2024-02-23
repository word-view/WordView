import * as React from 'react'
import renderer from 'react-test-renderer'
import { ContentHolder } from '../../components'

it(`ContentHolder renders`, () => {
  const tree = renderer.create(<ContentHolder title='Test ContentHolder' children={<></>} />).toJSON()
  expect(tree).toBeDefined()
})
