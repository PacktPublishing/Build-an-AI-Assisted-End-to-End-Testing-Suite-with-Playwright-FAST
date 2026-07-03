await expect(
  page.getByRole('heading', { name: 'Dashboard' })
).toBeVisible();
