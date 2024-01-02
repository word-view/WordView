import { Word } from '../../modules/api'

export interface LessonWord {
  word: Word
  usedScreens: string[]
}

export class WordManager {
  private static lessonWords: LessonWord[] = []
  private static currentWord: Word

  static pickRandom() {
    let word =
      this.lessonWords[Math.floor(Math.random() * this.lessonWords.length)]

    if (!word) {
      console.log('No words found!')
      return
    }

    return word
  }

  static appendWords(words: Word[]) {
    for (const word of words) {
      this.lessonWords.push({ word: word, usedScreens: [] })
    }
  }

  static removeWord(word: LessonWord) {
    let index = this.lessonWords.indexOf(word)
    if (index !== -1) this.lessonWords.splice(index, 1)
  }

  static setCurrentWord(word: Word) {
    this.currentWord = word
  }

  static getCurrentWord() {
    return this.currentWord
  }

  static setWordUsedScreen(word: Word, screen: string) {
    for (const worde of this.lessonWords) {
      if (worde.word == word) {
        worde.usedScreens.push(screen)
      }
    }
  }
}
