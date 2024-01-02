import { ScrollView, StyleProp, ViewStyle } from 'react-native'

interface HorizontalScrollViewProps {
  children: any
  style?: StyleProp<ViewStyle>
}

export function HorizontalScrollView(props: HorizontalScrollViewProps) {
  return (
    <ScrollView
      style={props.style}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {props.children}
    </ScrollView>
  )
}
