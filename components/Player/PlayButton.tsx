import { memo } from 'react'
import { Appbar } from 'react-native-paper'

interface PlayButtonProps {
  isAudioPlaying: boolean
  onPause: () => void
  onPlay: () => void
}

function $PlayButton(props: PlayButtonProps) {
  if (props.isAudioPlaying) {
    return <Appbar.Action icon='pause' size={32} onPress={props.onPause} />
  } else {
    return <Appbar.Action icon='play' size={32} onPress={props.onPlay} />
  }
}

export const PlayButton = memo($PlayButton)
