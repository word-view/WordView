import { test, expect } from '@playwright/test';
import { goPlayer } from './locations';

test('Has title', async ({ page }) => {
    await goPlayer(page);
    await expect(page).toHaveTitle(/Kutsu no hanabi/);
});
