import { memo } from 'react'
import { View } from 'react-native'
import { Appbar } from 'react-native-paper'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

interface Props {
  onPressHome: () => void
  onPressProgress: () => void
}

function $SideNavigation(props: Props) {
  return (
    <View
      style={{
        backgroundColor: '#2C2831',
        width: wp(4),
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        zIndex: 10,
        position: 'absolute',
        right: 0,
      }}
    >
      <Appbar.Action icon='home' onPress={props.onPressHome} />
      <Appbar.Action icon='road-variant' onPress={props.onPressProgress} />
    </View>
  )
}

export const SideNavigation = memo($SideNavigation)
