import { DesktopModeProvider, Input } from '../../App/Components';
import { act, render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

test('Tree is defined', async () => {
    jest.useFakeTimers();
    const tree = renderer.create(createInput()).toJSON();
    act(() => jest.runAllTimers());

    expect(tree).toBeDefined();
});

test('Desktop dimensions are applied', () => {
    jest.useFakeTimers();

    const input = render(
        <DesktopModeProvider.Provider value={true}>{createInput()}</DesktopModeProvider.Provider>,
    ).getByTestId('input');

    act(() => jest.runAllTimers());

    const style = input.props.style[1];
    expect(style.height).toBe(55);
});

test('Mobile dimensions are applied', () => {
    jest.useFakeTimers();

    const input = render(
        <DesktopModeProvider.Provider value={false}>{createInput()}</DesktopModeProvider.Provider>,
    ).getByTestId('input');

    act(() => jest.runAllTimers());

    const style = input.props.style[1];
    expect(style.height).toBe(60);
});

function createInput() {
    return (
        <Input
            label='Email'
            style={{ marginTop: 5 }}
            dimensions={{ w: 400, h: 55 }}
            mobileDimensions={{ w: 500, h: 60 }}
        />
    );
}
