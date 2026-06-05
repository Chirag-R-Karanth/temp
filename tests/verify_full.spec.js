import { test, expect } from '@playwright/test';

test('Verify Home Pages Full Content', async ({ page }) => {
  // Light Side
  await page.goto('http://localhost:8000/index.html');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'light_home_full.png', fullPage: true });

  // Switch to Dark Side
  await page.click('.mascot');
  await page.waitForTimeout(1500); // Wait for hyperspace transition
  await page.screenshot({ path: 'dark_home_full.png', fullPage: true });

  // Go to Doodles
  await page.goto('http://localhost:8000/bl_doodles.html');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'dark_doodles.png', fullPage: true });
});
