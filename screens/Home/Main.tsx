import React, { memo } from 'react'
import { ScrollView } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { HorizontalScrollView, Lesson, Section } from '../../components'
import images from '../../images'

interface MainScreenProps {
  nav: any
}

function Main(props: MainScreenProps) {
  return (
    <ScrollView>
      <Section title='Natureza' fill={true} style={{ marginTop: hp(2.5) }}>
        <HorizontalScrollView>
          <Lesson
            img={images.cac}
            text='Plants'
            style={{ marginTop: hp(1) }}
            onPress={() => props.nav.navigate('Lesson')}
          />
        </HorizontalScrollView>
      </Section>
    </ScrollView>
  )
}

export default memo(Main)
