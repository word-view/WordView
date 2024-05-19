import { memo } from 'react';
import ActionButton from '../../../Framework/Components/ActionButton';

interface PlayButtonProps {
    isAudioPlaying: boolean;
    size: number;
    onPause: () => void;
    onPlay: () => void;
}

function $PlayButton(props: PlayButtonProps) {
    if (props.isAudioPlaying) {
        return (
            <ActionButton
                tooltipTitle='Pausar (K)'
                icon='pause'
                style={{ padding: 0, marginRight: 0 }}
                size={props.size}
                onPress={props.onPause}
            />
        );
    } else {
        return (
            <ActionButton
                tooltipTitle='Reproduzir (K)'
                icon='play'
                style={{ padding: 0, marginRight: 0 }}
                size={props.size}
                onPress={props.onPlay}
            />
        );
    }
}

export const PlayButton = memo($PlayButton);
