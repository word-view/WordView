import renderer from 'react-test-renderer'
import App from '../App'

// This takes a long time to run but it still useful. Should probably find a way
// to test individual screens instead of the entire app.
it(`App renders`, () => {
  if (process.env.CI) return

  const tree = renderer.create(<App />).toJSON()
  expect(tree).toBeDefined()
})
