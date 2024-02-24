import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { Button as RNPButton } from 'react-native-paper'
import { memo, useContext } from 'react'
import { DesktopModeProvider } from '../Provider'

interface SmallButtonProps {
  text: string
  icon?: string
  disabled?: boolean
  color: {
    text: string
    button: string
  }
  /** As heightPercentageToDP */
  marginTop?: number
  onPress: () => void
  style?: StyleProp<ViewStyle>
  pressable?: boolean
}

function $SmallButton(props: SmallButtonProps) {
  const desktop = useContext(DesktopModeProvider)

  return (
    <RNPButton
      mode='elevated'
      disabled={props.disabled}
      textColor={props.color.text}
      icon={props.icon}
      buttonColor={props.color.button}
      onPress={() => {
        if (props.pressable || props.pressable == undefined) props.onPress()
      }}
      style={[styles.button, props.style]}
      contentStyle={styles.button}
      labelStyle={[{ fontWeight: '500' }, desktop && { fontSize: 14 }]}
    >
      {props.text}
    </RNPButton>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 122,
    borderRadius: 10,
  },
})

export const SmallButton = memo($SmallButton)
