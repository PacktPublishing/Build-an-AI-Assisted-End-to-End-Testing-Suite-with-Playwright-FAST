await page.getByLabel('Email').fill('user@example.com');
await page.getByLabel('Password').fill('not-a-real-secret');
await page.getByRole('button', { name: 'Log in' }).click();
