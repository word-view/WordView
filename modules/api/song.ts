import { Song } from '../../storage/store/player'
import { get } from './client'

export async function getHistory() {
  const response = await get('/music/history')

  const responseText = await response.text()

  if (response.status == 200) {
    return JSON.parse(responseText) as Song
  } else console.error(responseText)
}
