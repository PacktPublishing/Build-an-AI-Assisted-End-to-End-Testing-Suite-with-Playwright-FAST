await page.goto('/signin');

await page.getByLabel('Email').fill('test@example.com');
await page.getByLabel('Password').fill('password');
