import { fireEvent, render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { FrameworkButton } from '../../Framework/Components/FrameworkButton';

test('Tree is defined', () => {
  const tree = renderer.create(createButton()).toJSON();
  expect(tree).toBeDefined();
});

test('Container renders correctly', () => {
  const container = render(createButton()).getByTestId('framework-button-container');

  expect(container.props.style.backgroundColor).toBe('#000000');
  expect(container.props.style.borderRadius).toBe(20);
  expect(container.props.style.elevation).toBe(1);
});

test('Gradient renders correctly', () => {
  const gradient = render(createButton()).getByTestId('framework-button-gradient');

  let buttonStyle = gradient.props.style[0];

  expect(buttonStyle.width).toBe(400);
  expect(buttonStyle.height).toBe(50);
  expect(buttonStyle.borderRadius).toBe(20);
});

test('Touchable renders correctly', () => {
  const touchable = render(createButton()).getByTestId('framework-button');

  // This is quite confusing because we need to ignore react-native-paper's default styles
  let buttonStyle = touchable.props.style[touchable.props.style.length - 1][0];

  expect(buttonStyle.width).toBe(400);
  expect(buttonStyle.height).toBe(50);
  expect(buttonStyle.borderRadius).toBe(20);
});

test('Label renders correctly', () => {
  const label = render(createButton()).getByTestId('framework-button-text');

  // This is quite confusing because we need to ignore react-native-paper's default styles
  let buttonStyle = label.props.style[label.props.style.length - 1][1];

  expect(label.children.length).toBe(1);
  expect(label.children[0]).toBe('Test Button');
  expect(buttonStyle.fontWeight).toBe('600');
  expect(buttonStyle.color).toBe('white');
});

test('Press works ', done => {
  const button = render(createButton(done)).getByTestId('framework-button');
  fireEvent(button, 'press');
});

function createButton(onPress?: () => {}) {
  return (
    <FrameworkButton
      text='Test Button'
      textColor='white'
      buttonColor='#000000'
      fontWeight='600'
      dimensions={{ w: 400, h: 50 }}
      borderRadius={20}
      gradientColors={['rgba(28,27,31,0.5)', 'transparent']}
      onPress={onPress ?? (() => {})}
    />
  );
}
