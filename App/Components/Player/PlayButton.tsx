import { memo } from 'react';
import ActionButton from '../../../Framework/Components/ActionButton';

interface PlayButtonProps {
    isAudioPlaying: boolean;
    size: number;
    onPause: () => void;
    onPlay: () => void;
}

function $PlayButton(props: PlayButtonProps) {
    return (
        <ActionButton
            tooltipTitle={props.isAudioPlaying ? 'Pausar (K)' : 'Reproduzir (K)'}
            icon={props.isAudioPlaying ? 'pause' : 'play'}
            style={{ padding: 0, marginRight: 0 }}
            size={props.size}
            onPress={props.isAudioPlaying ? props.onPause : props.onPlay}
        />
    );
}

export const PlayButton = memo($PlayButton);
