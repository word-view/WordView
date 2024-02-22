import React, { forwardRef, memo } from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export interface Route {
  key: string
  title: string
  focusedIcon: string
  unfocusedIcon: string
  mobileOnly: boolean
  component: () => React.JSX.Element
}

interface Props {
  routes: Route[]
  setIndex: (index: number) => void
}

const $SideNavigation = forwardRef((props: Props, ref) => {
  function routeToAction(route: Route) {
    if (route.mobileOnly) return

    const routeIndex = props.routes.indexOf(route)
    return (
      <Appbar.Action
        icon={route.focusedIcon}
        onPress={() => props.setIndex(routeIndex)}
        style={routeIndex != 0 && { marginTop: hp(2) }}
      />
    )
  }

  function mapActions() {
    if (!props.routes) console.warn('No routes specified!')

    let actions = []

    for (const route of props.routes) {
      actions.push(routeToAction(route))
    }

    return actions
  }

  return <View style={styles.sidebar}>{mapActions()}</View>
})

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: '#2C2831',
    height: '100%',
    width: wp(5),
    alignItems: 'center',
    justifyContent: 'flex-start',
    zIndex: 10,
    position: 'absolute',
    left: 0,
  },
})

export const SideNavigation = memo($SideNavigation)
