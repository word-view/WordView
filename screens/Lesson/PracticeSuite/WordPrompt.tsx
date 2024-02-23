import { useContext, useRef } from 'react'
import { Icon } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Animator from './Animator'
import { wait } from '../../../modules/time/time'
import { DraggableView, LabeledChildren, WordImage, DesktopModeProvider } from '../../../components'
import images from '../../../config/images'

interface WordPromptProps {
  onSkip: Function
  onMemorize: Function
}

/**
 * Presents the word asking if the user wants to memorize it or skip
 */
export default function WordPrompt(props: WordPromptProps) {
  const desktop = useContext(DesktopModeProvider)

  let leaving = false

  let leaveOutRef = useRef(null)

  function finishLesson() {
    leaving = true
    if (leaveOutRef.current) {
      ;(leaveOutRef.current as any).leaveOut()
    }
  }

  return (
    <Animator inDuration={500} outDuration={400} ref={leaveOutRef}>
      <View style={[styles.layoutView, desktop ? desktopStyles.layoutView : mobileStyles.layoutView]}>
        <LabeledChildren text='Skip'>
          <Icon source='eye-off' color='#fff' size={64} />
        </LabeledChildren>

        <DraggableView
          onDragLeft={async () => {
            if (leaving) return
            finishLesson()
            await wait(500)
            props.onSkip()
          }}
          onDragRight={async () => {
            if (leaving) return
            finishLesson()
            await wait(500)
            props.onMemorize()
          }}
        >
          <LabeledChildren text='Cactus'>
            <WordImage size={180} source={images.cac} />
          </LabeledChildren>
        </DraggableView>

        <LabeledChildren text='Memorize'>
          <Icon source='brain' color='#fff' size={64} />
        </LabeledChildren>
      </View>
    </Animator>
  )
}

const styles = StyleSheet.create({
  layoutView: {
    justifyContent: 'space-evenly',
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  caption: { marginTop: hp(2.5), fontWeight: '600' },
})

const desktopStyles = StyleSheet.create({
  layoutView: {
    width: '50%',
    height: '100%',
    flexDirection: 'row',
  },
})
const mobileStyles = StyleSheet.create({
  layoutView: {
    width: '100%',
    height: '75%',
    flexDirection: 'column',
  },
})
