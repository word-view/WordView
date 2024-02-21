import { memo } from 'react'
import { View } from 'react-native'
import { Appbar } from 'react-native-paper'

interface HeaderRightProps {
  onPressCog?: () => void
}

export function $HeaderRight(props: HeaderRightProps) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Appbar.Action icon='cog' onPress={props.onPressCog} />
    </View>
  )
}

export const HeaderRight = memo($HeaderRight)
