await expect(
  page.getByRole('heading', { name: 'Logged In Successfully' })
).toBeVisible();

await expect(
  page.getByText('Congratulations student. You successfully logged in!')
).toBeVisible();
