import { withNavigation } from 'react-navigation'
import { ScrollView } from 'react-native'
import { Avatar, Surface, Text } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { currentLesson } from '../../storage/store/lesson'
import { Button, DiffFlare, LessonProgressBar, WordLearnedCard } from '../../components'
import { NavigationScreen } from '../NavigationScreen'
import images from '../../config/images'

class Statistics extends NavigationScreen {
  componentDidMount() {
    if (this.desktop) {
      this.setTitle(currentLesson.get().title)
      this.hideHeader()
    }
    this.headerLeft(<View />)
  }

  render() {
    return (
      <View style={[{ width: '100%', height: '100%' }, !this.desktop && { backgroundColor: '#2C2831' }]}>
        <ScrollView>
          <Surface
            elevation={this.desktop ? 4 : 0}
            style={[styles.container, styles.surface, this.desktop ? { width: wp(45) } : { width: wp(95) }]}
          >
            <Avatar.Image size={124} style={[styles.shadow, { backgroundColor: '#D0BCFF66' }]} source={images.cac} />
            <View
              style={{
                marginLeft: wp(2.5),
                width: '75%',
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              }}
            >
              <Text variant='titleLarge'>{currentLesson.get().title}</Text>
              <DiffFlare type={currentLesson.get().difficulty} style={{ marginBottom: hp(2.5) }} />
              {this.desktop && <LessonProgressBar percentage={64} />}
            </View>
          </Surface>

          {!this.desktop && (
            <View
              style={{
                width: '100%',
                alignSelf: 'center',
                alignItems: 'center',
                backgroundColor: '#2C2831',
              }}
            >
              <LessonProgressBar percentage={64} />
            </View>
          )}

          <View style={[{ alignSelf: 'center' }, this.desktop ? { width: wp(45) } : { width: wp(90) }]}>
            <Text
              variant='titleMedium'
              style={{
                marginTop: hp(7.5),
                marginBottom: hp(2.5),
                fontWeight: '600',
              }}
            >
              Palavras aprendidas nesta aula
            </Text>

            <WordLearnedCard />
          </View>
        </ScrollView>
        <View
          style={{
            alignContent: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 0,
            marginBottom: hp(2.5),
            width: wp(20),
          }}
        >
          <Button
            color={{ text: 'white', button: '#55D962' }}
            onPress={() => this.navigateTo('Home')}
            marginTop={15}
            text='Concluir'
          />
        </View>
      </View>
    )
  }
}

export default withNavigation(Statistics)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2831',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
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
  surface: {
    alignSelf: 'center',
    marginTop: hp(2.5),
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
})
