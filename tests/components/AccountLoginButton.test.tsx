import { fireEvent, render } from '@testing-library/react-native'
import { testing } from '../../storage/store/state'
import renderer from 'react-test-renderer'
import { AccountLoginButton, Button } from '../../components'

beforeEach(() => testing.set(true))

it(`AccountLoginButton renders`, () => {
  const tree = renderer
    .create(
      <AccountLoginButton
        text='Test AccountLoginButton'
        icon='arrow-left'
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

it(`AccountLoginButton > onPress`, done => {
  const element = render(
    <AccountLoginButton
      text='Test AccountLoginButton'
      icon='arrow-left'
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
