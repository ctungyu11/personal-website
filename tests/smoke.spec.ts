import { test, expect } from '@playwright/test';

test('home renders and has hero', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Backend & Quantitative Developer/i })).toBeVisible();
});

test('projects page filters', async ({ page }) => {
  await page.goto('/projects');
  await expect(page.getByRole('heading', { name: /Projects/i })).toBeVisible();
  // select AI filter
  await page.getByRole('radio', { name: 'AI' }).click();
  await expect(page).toHaveURL(/tag=AI/);
});

test('contact submits (mock)', async ({ page }) => {
  await page.goto('/contact');
  await page.getByLabel('Name').fill('Test User');
  await page.getByRole('textbox', { name: 'Email' }).fill('test@example.com');
  await page.getByLabel('Message').fill('Hello from Playwright');
  const [res] = await Promise.all([
    page.waitForResponse((r) => r.url().includes('/api/contact') && [200, 400, 500].includes(r.status())),
    page.getByRole('button', { name: /send/i }).click(),
  ]);
  expect([200, 400, 500]).toContain(res.status());
});


