import { memo } from 'react'
import { Section } from '../../../components'
import images from '../../../config/images'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { Image, StyleSheet } from 'react-native'

interface WelcomeProps {
  marginLeft?: number
}

function $Welcome(props: WelcomeProps) {
  return (
    <Section
      title='Bem-vindo ao WordView!'
      fill={true}
      style={{ marginTop: hp(2.5), marginLeft: wp(props.marginLeft ?? 0) }}
    >
      <Image style={styles.wvIcon} source={images.wvIcon} />
    </Section>
  )
}

const styles = StyleSheet.create({
  wvIcon: {
    height: 68,
    width: 84,
  },
})

export const Welcome = memo($Welcome)
