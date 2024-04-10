import { memo, useContext } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import images from '../../images'
import { DesktopModeProvider } from '../Provider'

interface HeaderLeftProps {}

export function $HeaderLeft() {
  const desktop = useContext(DesktopModeProvider)
  return (
    <View style={styles.wvTitleHolder}>
      <Image style={styles.wvIcon} source={images.wvIcon} />
      {desktop && <Image style={styles.wvTitle} source={images.wvTitle} />}
    </View>
  )
}

const styles = StyleSheet.create({
  wvTitleHolder: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
  },
  wvIcon: {
    height: 29.92,
    width: 36.96,
    marginLeft: 15,
  },
  wvTitle: {
    height: 17.6,
    width: 105.6,
    marginLeft: 12,
  },
})

export const HeaderLeft = memo($HeaderLeft)
