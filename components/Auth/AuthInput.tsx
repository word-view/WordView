import { memo } from 'react'
import { Input } from '../Common'
import { HelperText } from 'react-native-paper'

interface Props {
  label: string
  errorText: string
  erroring?: boolean
  onChangeText: ((text: string) => void) & Function
  secure?: boolean
}

function $AuthInput(props: Props) {
  return (
    <>
      <Input
        mode='outlined'
        secure={props.secure}
        label={props.label}
        onChangeText={props.onChangeText}
      />
      <HelperText
        type='error'
        visible={props.erroring}
        style={{ alignSelf: 'flex-start' }}
      >
        {props.errorText}
      </HelperText>
    </>
  )
}

export const AuthInput = memo($AuthInput)
