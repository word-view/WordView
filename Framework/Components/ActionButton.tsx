import { Appbar, Tooltip } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

interface ActionButtonProps {
    tooltipTitle: string;
    onPress: () => void;
    size: number;
    style?: any;
    icon: IconSource;
}

export default function ActionButton(props: ActionButtonProps) {
    return (
        <Tooltip title={props.tooltipTitle}>
            <Appbar.Action
                testID='action-button'
                icon={props.icon}
                style={props.style}
                size={24}
                onPress={props.onPress}
            />
        </Tooltip>
    );
}
