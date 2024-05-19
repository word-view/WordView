import { fireEvent, render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import ActionButton from '../../Framework/Components/ActionButton';

test('Tree is defined', () => {
    const tree = renderer.create(createActionButton()).toJSON();
    expect(tree).toBeDefined();
});

test('Press works ', done => {
    const button = render(createActionButton(done)).getByTestId('action-button');
    fireEvent(button, 'press');
});

function createActionButton(onPress?: () => {}) {
    return (
        <ActionButton
            tooltipTitle='Do (D)'
            icon='skip-forward'
            size={24}
            onPress={onPress ?? (() => {})}
        />
    );
}
