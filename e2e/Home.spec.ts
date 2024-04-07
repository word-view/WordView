import { test, expect } from '@playwright/test'
import { goHome } from './locations'

test('Home opened through register', async ({ page }) => {
  await goHome(page)
  await expect(page).toHaveTitle('Learn - WordView')
})

test('Home click first history song', async ({ page }) => {
  await goHome(page)

  await page.getByText('YOASOBI「あの夢をなぞって」 Official').click()
  await expect(page).toHaveTitle(/YOASOBI「あの夢をなぞって」 Official/)
})

test('Home navigate to explore tab', async ({ page }) => {
  await goHome(page)

  await page.getByText('󰆋Explore').click()
  await expect(page).toHaveTitle('Explore - WordView')
})

test('Home navigate to progress tab', async ({ page }) => {
  await goHome(page)

  await page.getByText('󰄪Progress').click()
  await expect(page).toHaveTitle('Progress - WordView')
})
