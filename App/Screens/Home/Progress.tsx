import React, { memo } from 'react'
import { View } from 'react-native'
import { Section } from '../../Components'
import { Text } from 'react-native-paper'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

interface ProgressProps {
  marginTop?: number
  marginLeft?: number
  nav: any
}

function Progress(props: ProgressProps) {
  return (
    <View style={{ marginTop: hp(props.marginTop ?? 0), marginLeft: wp(props.marginLeft ?? 0) }}>
      <Section title='Ouvir novamente' fill={true}>
        <Text variant='titleSmall'>Hello World</Text>
      </Section>
    </View>
  )
}

export default memo(Progress)
