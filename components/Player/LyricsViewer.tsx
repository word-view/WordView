import { memo, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Cue } from './types'

interface LyricsViewerProps {
  cues: Cue[]
  audioPosition: number
}

function $LyricsViewer(props: LyricsViewerProps) {
  const [caption, setCaption] = useState<Cue>()

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined

    // Clear previous timeout when audio position changes
    clearTimeout(timeoutId)

    for (const cue of props.cues) {
      let startTimeMs = Math.floor(cue.startTime * 1000)
      let endTimeMs = Math.floor(cue.endTime * 1000)

      if (props.audioPosition >= startTimeMs && props.audioPosition < endTimeMs) {
        // Display caption if audio position is within cue's time range
        setCaption(cue)

        // Set timeout to hide caption
        const duration = endTimeMs - props.audioPosition
        timeoutId = setTimeout(() => {
          setCaption(undefined) // Hide caption
        }, duration)

        break // Exit loop after finding the current cue
      }
    }

    return () => {
      // Clear timeout when component unmounts or audio position changes
      clearTimeout(timeoutId)
    }
  }, [props.audioPosition, props.cues])

  return <View style={styles.lyricsViewer}>{caption?.text}</View>
}

export const LyricsViewer = memo($LyricsViewer)

const styles = StyleSheet.create({
  lyricsViewer: {
    width: '98%',
    height: '84%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#CB495E',
    overflow: 'scroll',
  },
})
