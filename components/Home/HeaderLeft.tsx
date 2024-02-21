import { memo } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { ResponsiveLayout } from '../Backend'
import images from '../../images'

interface HeaderLeftProps {
  onPressMenu?: () => void
}

export function $HeaderLeft(props: HeaderLeftProps) {
  const { isDesktop } = ResponsiveLayout()

  return (
    <View style={styles.wvTitleHolder}>
      <Image style={styles.wvIcon} source={images.wvIcon} />
      {isDesktop && <Image style={styles.wvTitle} source={images.wvTitle} />}
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
    height: 34,
    width: 42,
    marginLeft: 15,
  },
  wvTitle: {
    height: 20,
    width: 120,
    marginLeft: 15,
  },
})

export const HeaderLeft = memo($HeaderLeft)
