import { Song } from '../../App/Storage/store/player'
import { get } from './client'

export interface Subtitle {
  language: string
  name: string
}

export async function getHistory() {
  const response = await get('/music/history')

  const responseText = await response.text()

  if (response.status == 200) {
    return JSON.parse(responseText) as Song
  } else console.error(responseText)
}

export async function getAvailableSubtitles(id: string) {
  const response = await get(`/music/lyrics/list?id=${id}`)

  const responseText = await response.text()

  if (response.status == 200) {
    return JSON.parse(responseText) as Subtitle[]
  } else console.error(responseText)
}

export async function getLyrics(id: string, lang: string) {
  const response = await get(`/music/lyrics?id=${id}&lang=${lang}`)

  const responseText = await response.text()

  if (response.status == 200) {
    return responseText
  } else console.error(responseText)
}
