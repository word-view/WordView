import { View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'
import globalStyles from '../../config/global-styles'

interface TextBubbleProps {
  text?: string
}

export default function TextBubble(props: TextBubbleProps) {
  return (
    <View
      style={[
        globalStyles.shadow,
        {
          backgroundColor: '#ffffff66',
          paddingVertical: 15,
          paddingHorizontal: 25,
          borderRadius: 10,
        },
      ]}
    >
      <Text
        variant='titleMedium'
        selectable={false}
        style={{ color: '#000', fontSize: 16, fontWeight: '600' }}
      >
        {props.text ?? 'hey rockers'}
      </Text>
    </View>
  )
}
