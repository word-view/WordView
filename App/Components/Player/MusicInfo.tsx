import { memo } from 'react';
import { Song } from '../../Storage/store/player';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import React from 'react';

interface MusicInfoProps {
  song: Song;
}

function $MusicInfo(props: MusicInfoProps) {
  return (
    <View style={styles.musicInfoContainer}>
      <Image style={styles.coverImage} source={props.song.cover} />
      <View style={styles.informationArea}>
        <Text variant='labelLarge'>{props.song.title}</Text>
        <Text variant='labelSmall'>{props.song.artist}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  coverImage: { height: 75, width: 75, borderRadius: 10 },
  informationArea: { height: '100%', justifyContent: 'center', marginLeft: 10 },
  musicInfoContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginLeft: 10,
  },
});

export const MusicInfo = memo($MusicInfo);
