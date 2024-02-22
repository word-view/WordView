import { fireEvent, render } from '@testing-library/react-native'
import { testing } from '../../storage/store/state'
import renderer from 'react-test-renderer'
import { Button } from '../../components'

beforeEach(() => testing.set(true))

it(`Button renders`, () => {
  const tree = renderer
    .create(
      <Button
        text='Test Button'
        color={{
          text: '#000',
          button: '#fff',
        }}
        onPress={() => {}}
      />,
    )
    .toJSON()
  expect(tree).toBeDefined()
})

it(`Button > onPress`, done => {
  const element = render(
    <Button
      text='Test Button'
      color={{
        text: '#000',
        button: '#fff',
      }}
      onPress={() => done()}
    />,
  )

  const button = element.getByTestId('button')

  fireEvent(button, 'press')
})
