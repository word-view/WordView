import React, { memo } from 'react'
import { Section } from '../../Components'
import { Text } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

interface ProgressProps {
  marginTop?: number
  marginLeft?: number
  nav: any
}

function Progress(props: ProgressProps) {
  return (
    <ScrollView>
      <Section
        title='Explore tab'
        fill={true}
        style={{ marginTop: hp(props.marginTop ?? 0), marginLeft: wp(props.marginLeft ?? 0) }}
      >
        <Text variant='titleSmall'>Hello World</Text>
      </Section>
    </ScrollView>
  )
}

export default memo(Progress)
