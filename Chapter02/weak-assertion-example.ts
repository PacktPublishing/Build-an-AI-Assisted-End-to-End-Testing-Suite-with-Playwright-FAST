await expect(
  page.getByRole('button', { name: 'Log in' })
).toBeVisible();
