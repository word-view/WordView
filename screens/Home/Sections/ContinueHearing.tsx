import { memo } from 'react'
import { HorizontalScrollView, Song, Section } from '../../../components'
import images from '../../../config/images'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

interface ContinueHearingProps {
  marginLeft?: number
  marginTop?: number
  appNav: any
}

function $ContinueHearing(props: ContinueHearingProps) {
  function openPlayer(id: string) {
    // set song id
    props.appNav.navigate('player')
  }

  return (
    <Section
      title='Ouvir novamente'
      fill={true}
      style={{ marginTop: hp(props.marginTop ?? 0), marginLeft: wp(props.marginLeft ?? 0) }}
    >
      <HorizontalScrollView>
        <Song
          img={images.yoruNiCover}
          title='夜に駆ける'
          artist='YOASOBI'
          onPress={() => openPlayer('mJ1N7-HyH1A')}
        />
        <Song
          img={images.mirrorCover}
          title='Englishman in New York'
          artist='majiko'
          onPress={() => openPlayer('cdas=-231')}
        />
        <Song
          img={images.kataomoiCover}
          title='Kataomoi'
          artist='Aimer'
          onPress={() => openPlayer('a-=-=12')}
        />
      </HorizontalScrollView>
    </Section>
  )
}

export const ContinueHearing = memo($ContinueHearing)
