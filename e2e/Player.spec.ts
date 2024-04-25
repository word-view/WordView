import { test, expect } from '@playwright/test'
import { goPlayer } from './locations'
import { checkAPIAvailable } from '../App/API/check'

test('Has title', async ({ page }) => {
  if (!(await checkAPIAvailable())) {
    console.log('API is unavailable this test will be skipped.')
    return
  }

  await goPlayer(page)
  await expect(page).toHaveTitle(/Kutsu no hanabi/)
})
