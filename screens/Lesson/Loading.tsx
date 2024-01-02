import { View } from 'react-native'
import { ActivityIndicator, Text } from 'react-native-paper'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function Loading() {
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator animating={true} color='#ffffff' size={64} />
      <Text
        variant='titleMedium'
        style={{ color: '#ffffff', fontWeight: '600', marginTop: hp(2.5) }}
        selectable={false}
      >
        Carregando atividade...
      </Text>
    </View>
  )
}
