import * as React from 'react'
import renderer from 'react-test-renderer'
import { DraggableView } from '../../components'

beforeEach(() => {
  console.warn = jest.fn()
})

it(`DraggableView renders`, () => {
  const tree = renderer.create(<DraggableView children={<></>} />).toJSON()
  expect(tree).toBeDefined()
})
