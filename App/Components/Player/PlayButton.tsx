import { memo } from 'react';
import { Appbar, Tooltip } from 'react-native-paper';

interface PlayButtonProps {
    isAudioPlaying: boolean;
    size: number;
    onPause: () => void;
    onPlay: () => void;
}

function $PlayButton(props: PlayButtonProps) {
    if (props.isAudioPlaying) {
        return (
            <Tooltip title='Pausar (K)'>
                <Appbar.Action
                    style={{ padding: 0, margin: 0 }}
                    icon='pause'
                    size={props.size}
                    onPress={props.onPause}
                />
            </Tooltip>
        );
    } else {
        return (
            <Tooltip title='Reproduzir (K)'>
                <Appbar.Action
                    style={{ padding: 0, margin: 0 }}
                    icon='play'
                    size={props.size}
                    onPress={props.onPlay}
                />
            </Tooltip>
        );
    }
}

export const PlayButton = memo($PlayButton);
