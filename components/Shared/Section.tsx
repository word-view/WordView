import { memo, useContext } from 'react'
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native'
import { Text } from 'react-native-paper'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { ScrollView } from 'react-native-gesture-handler'
import { DesktopModeProvider } from '../Provider'

interface SectionProps {
  title: string
  description?: string
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
  fill?: boolean
}

function $Section(props: SectionProps) {
  const desktop = useContext(DesktopModeProvider)

  return (
    <View
      style={[
        styles.root,
        desktop ? { width: wp(45) } : { width: wp(95) },
        props.fill && { width: wp(95) },
        props.style,
      ]}
    >
      <Text variant='titleLarge' style={{ fontWeight: '700' }}>
        {props.title}
      </Text>
      {props.description && <Text variant='titleSmall'>{props.description}</Text>}

      <ScrollView style={styles.childrenView}>{props.children}</ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignSelf: 'center',
    flexDirection: 'column',
  },
  childrenView: {
    marginTop: 2.5,
    flexDirection: 'column',
  },
})

export const Section = memo($Section)
