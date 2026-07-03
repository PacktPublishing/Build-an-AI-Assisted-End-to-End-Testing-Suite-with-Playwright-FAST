await expect(
  page.getByRole('heading', {
    name: 'Dashboard - Broken Example'
  })
).toBeVisible();
