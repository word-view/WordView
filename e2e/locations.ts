// functions to navigate to specific screens
import { Page } from '@playwright/test';

export const PAGE_URL = 'http://localhost:19006';

export async function goHome(page: Page) {
  await page.goto(PAGE_URL);
  await page.getByRole('button', { name: 'Começar' }).click();

  // TODO: using the bypass now for skipping the registering screen should be fixing this later
  await page.getByRole('button', { name: 'Ou entre na sua conta' }).click();
  await page.getByRole('button', { name: 'Inglês' }).click();
}

export async function goPlayer(page: Page) {
  await page.goto(PAGE_URL);
  await page.getByRole('button', { name: 'Começar' }).click();

  // TODO: using the bypass now for skipping the registering screen should be fixing this later
  await page.getByRole('button', { name: 'Ou entre na sua conta' }).click();
  await page.getByRole('button', { name: 'Inglês' }).click();

  await page.getByText('Kutsu no hanabi').click();
}
