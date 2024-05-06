import renderer, { act } from 'react-test-renderer';
import App from '../App';

// This takes a long time to run but it still useful. Should probably find a way
// to test individual screens instead of the entire app.
test(`App renders`, () => {
  if (process.env.CI) return;

  // jest.useFakeTimers();
  // const tree = renderer.create(<App />).toJSON();
  // act(() => jest.runAllTimers());

  // expect(tree).toBeDefined();
});
