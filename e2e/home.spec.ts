import { test, expect } from '@playwright/test'

test.describe('Home page', () => {
  test('loads and shows search form', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/GitScope/)
    await expect(page.getByTestId('search-form')).toBeVisible()
    await expect(page.getByTestId('search-input')).toBeVisible()
  })

  test('navigates to user page with mocked API', async ({ page }) => {
    await page.route('**/api.github.com/users/octocat', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          login: 'octocat',
          name: 'The Octocat',
          avatar_url: 'https://github.com/images/error/octocat_happy.gif',
          bio: 'GitHub mascot',
          email: null,
          followers: 9000,
          following: 9,
          public_repos: 8,
          html_url: 'https://github.com/octocat',
        }),
      })
    })

    await page.route('**/api.github.com/users/octocat/repos**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([
          {
            id: 1,
            name: 'Hello-World',
            full_name: 'octocat/Hello-World',
            description: 'My first repo',
            stargazers_count: 1500,
            language: 'JavaScript',
            html_url: 'https://github.com/octocat/Hello-World',
            forks_count: 100,
            updated_at: '2024-01-01T00:00:00Z',
            owner: { login: 'octocat' },
          },
        ]),
      })
    })

    await page.goto('/')
    await page.getByTestId('search-input').fill('octocat')
    await page.getByTestId('search-submit').click()

    await expect(page.getByTestId('user-profile')).toBeVisible()
    await expect(page.getByTestId('followers')).toHaveText('9.000')
    await expect(page.getByTestId('repo-list')).toBeVisible()
    await expect(page.getByTestId('repo-card')).toHaveCount(1)
  })
})
