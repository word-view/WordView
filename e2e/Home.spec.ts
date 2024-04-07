import { test, expect, Page } from '@playwright/test'
import { PAGE_URL } from './consts'

test('Home opened through register', async ({ page }) => {
  await navigateHome(page)
  await expect(page).toHaveTitle('Learn - WordView')
})

test('Home click first history song', async ({ page }) => {
  await navigateHome(page)

  await page.getByText('YOASOBI「あの夢をなぞって」 Official').click()
  await expect(page).toHaveTitle(/YOASOBI「あの夢をなぞって」 Official/)
})

test('Home navigate to explore tab', async ({ page }) => {
  await navigateHome(page)

  await page.getByText('󰆋Explore').click()
  await expect(page).toHaveTitle('Explore - WordView')
})

test('Home navigate to progress tab', async ({ page }) => {
  await navigateHome(page)

  await page.getByText('󰄪Progress').click()
  await expect(page).toHaveTitle('Progress - WordView')
})

async function navigateHome(page: Page) {
  await page.goto(PAGE_URL)
  await page.getByRole('button', { name: 'Começar' }).click()

  // TODO: using the bypass now for skipping the registering screen should be fixing this later
  await page.getByRole('button', { name: 'Ou entre na sua conta' }).click()
  await page.getByRole('button', { name: 'Inglês' }).click()
}
