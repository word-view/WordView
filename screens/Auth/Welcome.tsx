import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Button } from '../../components'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import images from '../../images'

interface Props {
  appNavigation: any
  navigation: any
  onLayoutRootView: any
}

export default function Welcome(props: Props) {
  useEffect(() => {
    props.navigation.setOptions({ headerShown: false })
  }, [])

  return (
    <View style={styles.container} onLayout={props.onLayoutRootView}>
      <View style={styles.wvLogoHolder}>
        <Image style={styles.wvIcon} source={images.wvIcon} />
        <Image style={styles.wvTitle} source={images.wvTitle} />

        <Text style={styles.wvText}>
          A maneira inteligente de {'\n'} aprender idiomas
        </Text>
      </View>

      <Button
        text='Começar'
        color={{ text: 'white', button: '#8951FF' }}
        onPress={() => props.navigation.navigate('Register')}
        marginTop={20}
      />
      <Button
        text='Já tenho uma conta'
        color={{ text: 'black', button: 'white' }}
        onPress={() => props.navigation.navigate('Login')}
        marginTop={2.5}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2831',
    alignItems: 'center',
  },
  wvLogoHolder: { alignItems: 'center', top: 0, marginTop: hp(15) },
  wvIcon: {
    height: 82,
    width: 101,
    marginBottom: 15,
  },
  wvTitle: {
    height: 36,
    width: 220,
    marginBottom: 15,
  },
  wvText: {
    fontFamily: 'OpenSans',
    fontSize: 20,
    textAlign: 'center',
    color: '#B3B3B3',
  },
})
