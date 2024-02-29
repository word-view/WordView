import React, { memo, useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { ContinueHearing, Welcome } from './Sections'
import { getHistory } from '../../modules/api/song'
import { Song } from '../../storage/store/player'

interface MainScreenProps {
  marginLeft?: number
  marginTop?: number
  appNav: any
}

function Main(props: MainScreenProps) {
  const isFirstLaunch = false

  return (
    <ScrollView>
      {isFirstLaunch ? (
        <Welcome marginTop={props.marginTop} marginLeft={props.marginLeft} appNav={props.appNav} />
      ) : (
        <ContinueHearing
          marginTop={props.marginTop}
          marginLeft={props.marginLeft}
          appNav={props.appNav}
        />
      )}
    </ScrollView>
  )
}

export default memo(Main)
