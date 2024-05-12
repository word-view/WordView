import { test, expect } from '@playwright/test';
import { PAGE_URL } from './locations';

test('Has title', async ({ page }) => {
    await page.goto(PAGE_URL);
    await expect(page).toHaveTitle(/WordView/);
});

test('Enter register and leave', async ({ page }) => {
    await page.goto(PAGE_URL);
    await page.getByRole('button', { name: 'Começar' }).click();

    await expect(page).toHaveTitle(/conta/);

    await page.getByLabel('Bem vindo ao WordView!, back').click();

    await expect(page).toHaveTitle(/WordView/);
});

test('Enter login and leave', async ({ page }) => {
    await page.goto(PAGE_URL);
    await page.getByRole('button', { name: 'Já tenho uma conta' }).click();

    await expect(page).toHaveTitle(/Bem vindo/);

    await page.getByLabel('Bem vindo ao WordView!, back').click();

    await expect(page).toHaveTitle(/WordView/);
});
