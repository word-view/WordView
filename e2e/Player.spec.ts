import { test, expect } from '@playwright/test'
import { goPlayer } from './locations'

test('Has title', async ({ page }) => {
  await goPlayer(page)
  await expect(page).toHaveTitle(/YOASOBI「あの夢をなぞって」 Official/)
})
