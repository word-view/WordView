import { memo, useState } from 'react';
import ActionButton from '../../../Framework/Components/ActionButton';
import { onUpdateAsync } from '../../../Framework/Components/Actions';
import { AVPlaybackStatusSuccess } from 'expo-av';

interface MuteButtonProps {
    onPress: () => void;
    getAudioInfo: () => Promise<AVPlaybackStatusSuccess | undefined>;
    size: number;
}

function $MuteButton(props: MuteButtonProps) {
    
    const [audioInfo, setAudioInfo] = useState<AVPlaybackStatusSuccess>();

    // ugly workaround to get the audio duration, fix later
    onUpdateAsync([props.getAudioInfo], async () => {
        const info = await props.getAudioInfo();
        if (!info) return;
        setAudioInfo(info);
    });

    return <ActionButton
                tooltipTitle={audioInfo?.isMuted ? "Restaurar som (M)" : "Mudo (M)"}
                icon={audioInfo?.isMuted ? "volume-mute" : "volume-high"}
                style={{ padding: 0, marginRight: 0 }}
                size={props.size}
                onPress={props.onPress}
            />
}

export const MuteButton = memo($MuteButton);
