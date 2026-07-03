await page.getByLabel('Email').fill('test@example.com');
await page.getByLabel('Password').fill('password');
await page.getByRole('button', { name: 'Log in' }).click();
