import { createStore } from '@propero/easy-store'

export interface Song {
  title: string
  artist: string
  image: any
}

export const tutorialing = createStore(false)
export const song = createStore({} as Song)
