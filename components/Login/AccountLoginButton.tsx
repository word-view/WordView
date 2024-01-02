import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

interface AccountLoginButtonProps {
  text: string
  icon: string
  color: {
    text: string
    button: string
  }
  /** As heightPercentageToDP */
  marginTop?: number
  onPress: () => void
}

export function AccountLoginButton(props: AccountLoginButtonProps) {
  return (
    <Button
      icon={props.icon}
      mode='elevated'
      textColor={props.color.text}
      buttonColor={props.color.button}
      style={[styles.accountButton, { marginTop: hp(props.marginTop ?? 0) }]}
      onPress={props.onPress}
    >
      {props.text}
    </Button>
  )
}

const styles = StyleSheet.create({
  accountButton: {
    width: '100%',
    alignSelf: 'center',
  },
})
