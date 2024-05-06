import { Button, DesktopModeProvider } from '../../App/Components';
import { fireEvent, render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

test('Tree is defined', () => {
  const tree = renderer.create(createButton()).toJSON();
  expect(tree).toBeDefined();
});

test('Desktop dimensions are applied', () => {
  const button = render(
    <DesktopModeProvider.Provider value={true}>{createButton()}</DesktopModeProvider.Provider>,
  ).getByTestId('framework-button');

  const style = button.props.style[button.props.style.length - 1][0];

  expect(style.width).toBe(400);
  expect(style.height).toBe(55);
});

test('Mobile dimensions are applied', () => {
  const button = render(
    <DesktopModeProvider.Provider value={false}>{createButton()}</DesktopModeProvider.Provider>,
  ).getByTestId('framework-button');

  const style = button.props.style[button.props.style.length - 1][0];

  expect(style.width).toBe(375);
  expect(style.height).toBe(60);
});

test('Press works', done => {
  const button = render(createButton(done)).getByTestId('framework-button');
  fireEvent(button, 'press');
});

function createButton(onPress?: () => {}) {
  return (
    <Button
      text='Start learning'
      textColor='white'
      buttonColor='#8951FF'
      style={{ marginTop: 20 }}
      dimensions={{ w: 400, h: 55 }}
      mobileDimensions={{ w: 375, h: 60 }}
      onPress={onPress ?? (() => {})}
    />
  );
}
