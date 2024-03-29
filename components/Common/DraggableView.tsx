import React, { useContext, useRef } from 'react'
import { PanResponder, Animated, Dimensions } from 'react-native'
import { Spring } from '../../modules/animator'
import { DesktopModeProvider } from '../Provider'

export interface DraggableViewProps {
  children: React.ReactNode
  pan?: Animated.ValueXY
  onDragLeft?: Function
  onDragRight?: Function
}

export function DraggableView(props: DraggableViewProps) {
  const desktop = useContext(DesktopModeProvider)

  let pan: Animated.ValueXY | Animated.Value

  if (props.pan) {
    pan = props.pan
  } else {
    pan = useRef(new Animated.ValueXY()).current
  }

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: (e, gesture) => {
        const { width, height } = Dimensions.get('window')
        const [x, y] = [gesture.moveX, gesture.moveY]

        if (desktop) {
          if (x < width / 2 - 200) {
            props.onDragLeft?.()
          }

          if (x > width / 2 + 200) {
            props.onDragRight?.()
          }
        } else {
          if (y < height / 2 - 200) {
            props.onDragLeft?.()
          }

          if (y > height / 2 + 200) {
            props.onDragRight?.()
          }
        }

        Spring({ hook: pan, to: { x: 0, y: 0 } }).start()
      },
    }),
  ).current

  const panStyle = {
    transform: pan.getTranslateTransform(),
  }

  return (
    <Animated.View {...panResponder.panHandlers} style={[panStyle]}>
      {props.children}
    </Animated.View>
  )
}
