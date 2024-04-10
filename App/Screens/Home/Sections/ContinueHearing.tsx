import { memo, useEffect, useState } from 'react'
import { HorizontalScrollView, Song, Section } from '../../../Components'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { Song as SongType, song } from '../../../Storage/store/player'
import { getHistory } from '../../../../modules/api/song'

interface ContinueHearingProps {
  marginLeft?: number
  marginTop?: number
  appNav: any
}

function $ContinueHearing(props: ContinueHearingProps) {
  function openPlayer(songue: SongType) {
    song.set(songue)
    props.appNav.navigate('player')
  }

  const [histor, setHistor] = useState<SongType>({} as SongType)

  useEffect(() => {
    ;(async function aaa() {
      setHistor((await getHistory()) ?? ({} as SongType))
    })()
  }, [])

  return (
    <Section
      title='Ouvir novamente'
      fill={true}
      style={{ marginTop: hp(props.marginTop ?? 0), marginLeft: wp(props.marginLeft ?? 0) }}
    >
      <HorizontalScrollView>
        <Song
          img={histor.cover}
          title={histor.title}
          artist={histor.artist}
          onPress={() =>
            openPlayer({
              id: histor.id,
              title: histor.title,
              artist: histor.artist,
              cover: histor.cover,
            })
          }
        />
      </HorizontalScrollView>
    </Section>
  )
}

export const ContinueHearing = memo($ContinueHearing)
