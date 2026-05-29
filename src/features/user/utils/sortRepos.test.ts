import { describe, expect, it } from 'vitest'
import type { GithubRepository } from '../../../types/github'
import { sortRepositories } from './sortRepos'

function createRepo(overrides: Partial<GithubRepository> = {}): GithubRepository {
  return {
    id: 1,
    name: 'alpha',
    full_name: 'user/alpha',
    description: null,
    stargazers_count: 10,
    language: 'TypeScript',
    html_url: 'https://github.com/user/alpha',
    forks_count: 2,
    updated_at: '2024-01-01T00:00:00Z',
    owner: { login: 'user' },
    ...overrides,
  }
}

describe('sortRepositories', () => {
  const repos = [
    createRepo({ id: 1, name: 'beta', stargazers_count: 50, forks_count: 5, updated_at: '2024-03-01T00:00:00Z' }),
    createRepo({ id: 2, name: 'alpha', stargazers_count: 100, forks_count: 1, updated_at: '2024-01-01T00:00:00Z' }),
    createRepo({ id: 3, name: 'gamma', stargazers_count: 25, forks_count: 10, updated_at: '2024-06-01T00:00:00Z' }),
  ]

  it('sorts by stars descending by default', () => {
    const sorted = sortRepositories(repos, 'stars-desc')
    expect(sorted.map((r) => r.name)).toEqual(['alpha', 'beta', 'gamma'])
  })

  it('sorts by stars ascending', () => {
    const sorted = sortRepositories(repos, 'stars-asc')
    expect(sorted.map((r) => r.name)).toEqual(['gamma', 'beta', 'alpha'])
  })

  it('sorts by name ascending', () => {
    const sorted = sortRepositories(repos, 'name-asc')
    expect(sorted.map((r) => r.name)).toEqual(['alpha', 'beta', 'gamma'])
  })

  it('sorts by forks descending', () => {
    const sorted = sortRepositories(repos, 'forks-desc')
    expect(sorted.map((r) => r.name)).toEqual(['gamma', 'beta', 'alpha'])
  })

  it('does not mutate the original array', () => {
    const copy = [...repos]
    sortRepositories(repos, 'stars-desc')
    expect(repos).toEqual(copy)
  })
})
