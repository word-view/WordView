import { createStore } from '@propero/easy-store'

export interface Song {
  id?: string
  title: string
  artist: string
  cover: any
}

export const tutorialing = createStore(false)
export const song = createStore({} as Song)
