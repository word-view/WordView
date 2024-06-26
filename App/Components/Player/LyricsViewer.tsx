import { memo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Cue } from '../../Util/webvtt/types';
import { Text } from 'react-native-paper';
import { onUpdate } from '../../../Framework/Components/Actions/update';

interface LyricsViewerProps {
    cues: Cue[];
    audioPosition: number;
}

function $LyricsViewer(props: LyricsViewerProps) {
    const [caption, setCaption] = useState<Cue>();

    onUpdate([props.audioPosition, props.cues], () => {
        let timeoutId: string | number | NodeJS.Timeout | undefined;

        // Clear previous timeout when audio position changes
        clearTimeout(timeoutId);

        for (const cue of props.cues) {
            const startTimeMs = Math.floor(cue.startTime * 1000);
            const endTimeMs = Math.floor(cue.endTime * 1000);

            if (props.audioPosition >= startTimeMs && props.audioPosition < endTimeMs) {
                // Display caption if audio position is within cue's time range
                setCaption(cue);

                // Set timeout to hide caption
                const duration = endTimeMs - props.audioPosition;
                timeoutId = setTimeout(() => {
                    setCaption(undefined); // Hide caption
                }, duration);

                break; // Exit loop after finding the current cue
            }
        }

        return () => {
            // Clear timeout when component unmounts or audio position changes
            clearTimeout(timeoutId);
        };
    });

    return (
        <View style={styles.root}>
            <Text variant='titleLarge' key={caption?.id} style={styles.cue}>
                {caption?.text}
            </Text>
        </View>
    );
}

export const LyricsViewer = memo($LyricsViewer);

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        position: 'absolute',
    },
    cue: {
        fontWeight: '800',
    },
});
