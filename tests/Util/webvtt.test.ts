import { parseWebVTT } from '../../App/Util/webvtt/parse'
import { kutsuNoHanabi } from '../Samples/vtt'

it(`Parse .vtt file (Kutsu no Hanabi)`, async () => {
  const parsed = parseWebVTT(kutsuNoHanabi)
  expect(parsed).toMatchSnapshot()
})
