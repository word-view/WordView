import { formatTime } from '../../App/Util/time'

it(`Format time 1 second`, () => {
  let time = formatTime(1000)
  expect(time).toBe('00:01')
})

it(`Format time 1 minute`, () => {
  let time = formatTime(60000)
  expect(time).toBe('01:00')
})

it(`Format time 1 hour`, () => {
  let time = formatTime(3600000)
  expect(time).toBe('01:00:00')
})

it(`Format time NaN`, () => {
  let time = formatTime(NaN)
  expect(time).toBe('00:00')
})
