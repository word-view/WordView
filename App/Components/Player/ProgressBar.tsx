import { formatTime } from '../../Util/time';
import { Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { useContext, useState } from 'react';
import { DesktopModeProvider } from '../Provider';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { AVPlaybackStatusSuccess } from 'expo-av';
import { onUpdateAsync } from '../../../Framework/Component/Actions/update';
import React from 'react';

interface ProgressBarProps {
  audioPosition: number;
  getAudioInfo: () => Promise<AVPlaybackStatusSuccess | undefined>;
}

export function ProgressBar(props: ProgressBarProps) {
  const desktop = useContext(DesktopModeProvider);
  const [audioInfo, setAudioInfo] = useState<AVPlaybackStatusSuccess>();

  // ugly workaround to get the audio duration, fix later
  onUpdateAsync([props.getAudioInfo], async () => {
    const info = await props.getAudioInfo();
    if (!info) return;
    setAudioInfo(info);
  });

  function percentage(numberToGetPercentageOf: number, wholeNumber: number) {
    return (numberToGetPercentageOf / wholeNumber) * 100;
  }

  return (
    <View style={styles.progressBarRoot}>
      <View style={styles.progressBar}>
        <View
          style={[
            styles.songPositionBar,
            { width: `${percentage(props.audioPosition, audioInfo?.durationMillis ?? Infinity)}%` },
          ]}
        />
      </View>
      <View style={styles.timeContainer}>
        <Text variant='bodySmall'>{formatTime(props.audioPosition)}</Text>
        <Text variant='bodySmall'>
          {formatTime((audioInfo?.durationMillis ?? 0) - props.audioPosition)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressBarRoot: {
    height: 30,
    width: wp(50),
    marginBottom: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeContainer: {
    width: wp(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  progressBar: {
    width: wp(50),
    height: hp(0.8),
    marginBottom: 4,
    borderRadius: 20,
    backgroundColor: '#4C4850',
  },
  songPositionBar: {
    height: hp(0.8),
    borderRadius: 20,
    backgroundColor: '#9563FF',
  },
});
