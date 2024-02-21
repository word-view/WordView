import React, { memo } from 'react'
import { ScrollView } from 'react-native'
import { ContinueHearing, Welcome } from './Sections'

interface MainScreenProps {
  marginLeft?: number
  appNav: any
}

function Main(props: MainScreenProps) {
  const isFirstLaunch = false

  return (
    <ScrollView>
      {isFirstLaunch ? (
        <Welcome marginLeft={props.marginLeft} />
      ) : (
        <ContinueHearing marginLeft={props.marginLeft} appNav={props.appNav} />
      )}
    </ScrollView>
  )
}

export default memo(Main)
