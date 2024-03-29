import { StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import React from 'react'
import { formatTime, wait } from '../../modules/time/time'
import { Word } from '../../modules/api'
import { LinearGradient } from 'expo-linear-gradient'
import { LessonTimer, Timer } from '../../components'
import OutcomeNotifier from './OutcomeNotifier/OutcomeNotifier'
import { ScreenManager } from './ScreenManager'
import { LessonWord, WordManager } from './WordManager'
import { NavigationScreen } from '../NavigationScreen'
import images from '../../config/images'

function randomColor() {
  const colors = ['#46C3D3']
  return colors[Math.floor(Math.random() * colors.length)]
}

class Lesson extends NavigationScreen {
  pageColor = randomColor()

  timer = new LessonTimer(
    () => console.log('Timer ended!'),
    () => this.headerRight(<Timer time={this.timer.getFormattedTimeLeft()} />),
  )

  async fetchLessonWords(): Promise<Word[]> {
    ScreenManager.setCurrentScreen('@loading', () => this.hideHeader())
    await wait(1000) // simulate a api call that takes time
    ScreenManager.setCurrentScreen('@presenter', () => this.showHeader())
    return [
      {
        name: 'Cactus',
        spelling: ['Cac', 'tus'],
        image: images.cac,
      },
    ]
  }

  setupHeader() {
    this.headerRight(<Timer time={formatTime(300000)} />)
    this.setHeaderColor('#00000000')
  }

  initializeFSManager() {
    OutcomeNotifier.appendUpdater(() => this.forceUpdate())
    OutcomeNotifier.appendSuccessActions(
      () => this.setHeaderColor('#57CA4D'),
      () => this.setHeaderColor(this.pageColor),
    )
    OutcomeNotifier.appendFailActions(
      () => this.setHeaderColor('#CA4D4D'),
      () => this.setHeaderColor(this.pageColor),
    )
  }

  initializeScreenManager() {
    ScreenManager.appendUpdater(() => this.forceUpdate())
    ScreenManager.initializeScreens(() => this.pickWord())
  }

  async componentDidMount() {
    if (!this.timer.canStart()) this.goBack()

    this.setupHeader()
    this.initializeFSManager()
    this.initializeScreenManager()

    WordManager.appendWords(await this.fetchLessonWords())

    this.timer.run()
  }

  componentWillUnmount() {
    this.timer.saveGlobally()
  }

  async reinforceWord() {
    if (
      WordManager.getCurrentWord() != undefined ||
      ScreenManager.isCurrentScreen('@presenter')
    ) {
      ScreenManager.setCurrentScreen('@reinforce')
      await wait(3000)
    }
  }

  getRandomScreenFor(word: LessonWord) {
    let screen = ScreenManager.pickRandomScreenExcluding(word.usedScreens)

    if (!screen) {
      WordManager?.removeWord(word)
      this.pickWord()
      return
    }

    return screen
  }

  showStatistics() {
    this.componentWillUnmount()
    this.navigateTo('Statistics')
  }

  async pickWord() {
    await this.reinforceWord()

    const word = WordManager.pickRandom()
    if (!word) {
      this.showStatistics()
      return
    }

    const screen = this.getRandomScreenFor(word)
    if (!screen) return

    WordManager.setCurrentWord(word.word)
    WordManager.setWordUsedScreen(word.word, screen)
    ScreenManager.setCurrentScreen(screen)
  }

  render() {
    return (
      <LinearGradient
        colors={[this.pageColor, '#68E7F9']}
        start={{ x: 10, y: 20 }}
        style={styles.rootView}
      >
        {OutcomeNotifier.getResult()}
        {ScreenManager.getCurrentScreen()}
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  rootView: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default withNavigation(Lesson)
