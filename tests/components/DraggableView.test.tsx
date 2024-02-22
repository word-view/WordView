import * as React from 'react'
import renderer from 'react-test-renderer'
import { testing } from '../../storage/store/state'
import { DraggableView } from '../../components'

beforeEach(() => {
  testing.set(true)
  console.warn = jest.fn()
})

it(`DraggableView renders`, () => {
  const tree = renderer.create(<DraggableView children={<></>} />).toJSON()
  expect(tree).toBeDefined()
})
