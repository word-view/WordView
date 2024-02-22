import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'

interface TextBubbleProps {
  text?: string
}

export default function TextBubble(props: TextBubbleProps) {
  return (
    <View
      style={[
        styles.shadow,
        {
          backgroundColor: '#ffffff66',
          paddingVertical: 15,
          paddingHorizontal: 25,
          borderRadius: 10,
        },
      ]}
    >
      <Text variant='titleMedium' selectable={false} style={{ color: '#000', fontSize: 16, fontWeight: '600' }}>
        {props.text ?? 'hey rockers'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 1,
    elevation: 4,
  },
})
