import React, { forwardRef, memo, useContext, useImperativeHandle } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated'
import { Button } from '../Common'
import { DesktopModeProvider } from '../Provider'

interface SyllableButtonProps {
  text: string
  onPress: () => any
  style?: StyleProp<ViewStyle>
  correct?: boolean
}

const SyllableButton = forwardRef((props: SyllableButtonProps, ref) => {
  const desktop = useContext(DesktopModeProvider)

  const shakeValue = useSharedValue(0)

  const shakeAnimation = () => {
    shakeValue.value = withRepeat(
      withSequence(
        withTiming(-10, { duration: 50, easing: Easing.linear }),
        withTiming(10, { duration: 50, easing: Easing.linear }),
        withTiming(-10, { duration: 50, easing: Easing.linear }),
        withTiming(10, { duration: 50, easing: Easing.linear }),
        withTiming(-10, { duration: 50, easing: Easing.linear }),
        withTiming(0, { duration: 50, easing: Easing.linear }),
      ),
      1, // Number of times to repeat the sequence
    )
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: shakeValue.value }],
    }
  }, [shakeValue])

  useImperativeHandle(ref, () => ({ shakeAnimation }))

  let textColor, buttonColor, pressable

  switch (props.correct) {
    case true:
      textColor = '#000'
      buttonColor = '#58E8A8'
      pressable = false
      break
    default:
    case false:
      textColor = '#000'
      buttonColor = '#B9E8EE'
      pressable = true
      break
  }

  return (
    <Animated.View style={[animatedStyle]}>
      <Button
        pressable={pressable}
        color={{ text: textColor, button: buttonColor }}
        onPress={props.onPress}
        style={[{ width: wp(25) }, desktop && { width: wp(10) }]}
        text={props.text}
      />
    </Animated.View>
  )
})

export default memo(SyllableButton)
