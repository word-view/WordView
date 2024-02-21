import { memo } from 'react'
import { StyleProp, View, ViewStyle, Image } from 'react-native'
import { TouchableRipple, Text } from 'react-native-paper'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

interface SongProps {
  img: any
  title: String
  artist: String
  style?: StyleProp<ViewStyle>
  onPress: () => void
}

/**
 * Music entry
 * @param props
 * @returns
 */
function $Song(props: SongProps) {
  return (
    <TouchableRipple
      onPress={props.onPress}
      rippleColor='#CAC4D04D'
      borderless={true}
      style={[
        { borderRadius: 5, padding: 10, maxWidth: 148 },
        props.title.length < 17 && { maxHeight: 190 },
        props.style,
      ]}
    >
      <View style={{ alignItems: 'center' }}>
        <Image
          style={{ height: 128, width: 128, borderRadius: 10 }}
          source={props.img}
        />
        <Text
          variant='labelLarge'
          style={{
            marginTop: hp(1),
            alignSelf: 'flex-start',
          }}
        >
          {props.title}
        </Text>
        <Text
          variant='labelSmall'
          style={{
            alignSelf: 'flex-start',
          }}
        >
          Música • {props.artist}
        </Text>
      </View>
    </TouchableRipple>
  )
}

export const Song = memo($Song)
