import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Word } from '../../../modules/api'
import { shuffleArray } from '../../../modules/xtensions/array'
import Animator from './Animator'
import {
  ResponsiveLayout,
  LabeledChildren,
  WordImage,
} from '../../../components'
import SyllableButton from '../../../components/Lesson/SyllableButton'
import { WordManager } from '../WordManager'
import images from '../../../config/images'

interface WordSpellingProps {
  onFinish?: Function
}

/**
 * A simple word spelling exercise
 */
export default function WordSpelling(props: WordSpellingProps) {
  const isDesktop = ResponsiveLayout().isDesktop

  const leaveOutRef = useRef(null)

  const leftButtonRef = useRef(null)
  const middleButtonRef = useRef(null)
  const rightButtonRef = useRef(null)

  const [word, setWord] = useState({} as Word)

  const [left, setLeft] = useState('' as any)
  const [middle, setMiddle] = useState('' as any)
  const [right, setRight] = useState('' as any)

  const [leftCorrect, setLeftCorrect] = useState<boolean>(false)
  const [middleCorrect, setMiddleCorrect] = useState<boolean>(false)
  const [rightCorrect, setRightCorrect] = useState<boolean>(false)

  const [syllableCount, setSyllableCount] = useState(0)
  const [correctSyllableCount, setCorrectSyllableCount] = useState(0)

  const [soletration, setSoletration] = useState<string>('')

  useEffect(() => {
    setWord(WordManager.getCurrentWord())

    let shuffledOrder = shuffleArray([...(word.spelling ?? []), 'tar'])
    setSyllableCount(word.spelling?.length)

    setLeft(shuffledOrder[0])
    setMiddle(shuffledOrder[1])
    setRight(shuffledOrder[2])
  }, [word])

  function addToSoletration(partOfTheWord: string) {
    setSoletration(lastSyllable => {
      if (word.spelling[correctSyllableCount] == partOfTheWord) {
        return lastSyllable + partOfTheWord
      } else return lastSyllable
    })
  }

  function finishLesson() {
    if (leaveOutRef.current) {
      ;(leaveOutRef.current as any).leaveOut()
    }
  }

  function shakeLeftButton() {
    if (leftButtonRef.current) {
      ;(leftButtonRef.current as any).shakeAnimation()
    }
  }

  function shakeMiddleButton() {
    if (middleButtonRef.current) {
      ;(middleButtonRef.current as any).shakeAnimation()
    }
  }

  function shakeRightButton() {
    if (rightButtonRef.current) {
      ;(rightButtonRef.current as any).shakeAnimation()
    }
  }

  function guessSyllable(
    syllable: string,
    location: 'left' | 'middle' | 'right',
  ) {
    if (word.spelling[correctSyllableCount] == syllable) {
      setCorrectSyllableCount(correctSyllableCount + 1)

      switch (location) {
        case 'left':
          setLeftCorrect(true)
          addToSoletration(syllable)
          break
        case 'middle':
          setMiddleCorrect(true)
          addToSoletration(syllable)
          break
        case 'right':
          setRightCorrect(true)
          addToSoletration(syllable)
          break
      }

      if (correctSyllableCount + 1 == syllableCount) {
        finishLesson()
        props.onFinish?.()
      }
    } else {
      switch (location) {
        case 'left':
          setLeftCorrect(false)
          shakeLeftButton()
          break
        case 'middle':
          setMiddleCorrect(false)
          shakeMiddleButton()
          break
        case 'right':
          setRightCorrect(false)
          shakeRightButton()
          break
      }
    }
  }

  return (
    <Animator inDuration={500} outDuration={400} ref={leaveOutRef}>
      <View style={styles.layoutView}>
        <LabeledChildren text={soletration ?? ''}>
          <WordImage size={200} source={images.cac} />
        </LabeledChildren>

        <View style={[styles.alternativesView, isDesktop && { width: '50%' }]}>
          <SyllableButton
            onPress={() => guessSyllable(left, 'left')}
            correct={leftCorrect}
            ref={leftButtonRef}
            text={left}
          />

          <SyllableButton
            onPress={() => guessSyllable(middle, 'middle')}
            correct={middleCorrect}
            ref={middleButtonRef}
            text={middle}
          />
          <SyllableButton
            onPress={() => guessSyllable(right, 'right')}
            correct={rightCorrect}
            ref={rightButtonRef}
            text={right}
          />
        </View>
      </View>
    </Animator>
  )
}

const styles = StyleSheet.create({
  layoutView: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: hp(30),
  },
  alternativesView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
})
