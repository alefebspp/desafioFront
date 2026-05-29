import { test, expect } from '@playwright/test'

test.describe('Repository page', () => {
  test('shows repository details', async ({ page }) => {
    await page.route('**/api.github.com/repos/octocat/Hello-World', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          id: 1,
          name: 'Hello-World',
          full_name: 'octocat/Hello-World',
          description: 'My first repo on GitHub!',
          stargazers_count: 1500,
          language: 'JavaScript',
          html_url: 'https://github.com/octocat/Hello-World',
          forks_count: 100,
          updated_at: '2024-01-01T00:00:00Z',
          owner: { login: 'octocat' },
        }),
      })
    })

    await page.goto('/users/octocat/repos/Hello-World')

    await expect(page.getByTestId('repository-details')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Hello-World' })).toBeVisible()
    await expect(page.getByTestId('repo-stars')).toHaveText('1.500')
    await expect(page.getByTestId('repo-language')).toHaveText('JavaScript')
    await expect(page.getByTestId('repo-external-link')).toHaveAttribute(
      'href',
      'https://github.com/octocat/Hello-World',
    )
  })
})
