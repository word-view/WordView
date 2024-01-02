import { useEffect, useRef } from 'react'
import { wait } from '../../../modules/time/time'
import Animator from './Animator'
import { View, StyleSheet } from 'react-native'
import { LabeledChildren, WordImage } from '../../../components'
import images from '../../../images'
/**
 * Shows after a activity to reinforce the meaning of the word
 */
export default function WordReinforcement() {
  let leaveOutRef = useRef(null)

  function finishLesson() {
    if (leaveOutRef.current) {
      ;(leaveOutRef.current as any).leaveOut()
    }
  }

  useEffect(() => {
    ;(async function timeout() {
      await wait(2500)
      finishLesson()
    })()
  })

  return (
    <Animator inDuration={500} outDuration={400} ref={leaveOutRef}>
      <View style={styles.layoutView}>
        <LabeledChildren text='Cactus'>
          <WordImage size={200} source={images.cac} />
        </LabeledChildren>
      </View>
    </Animator>
  )
}

const styles = StyleSheet.create({
  layoutView: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})
