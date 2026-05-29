import { apiClient } from '../../../lib/api-client'
import type { GithubRepository, GithubUser } from '../../../types/github'

export async function fetchGithubUser(username: string): Promise<GithubUser> {
  const { data } = await apiClient.get<GithubUser>(`/users/${username}`)
  return data
}

export async function fetchGithubRepos(username: string): Promise<GithubRepository[]> {
  const { data } = await apiClient.get<GithubRepository[]>(`/users/${username}/repos`, {
    params: { per_page: 100, sort: 'updated' },
  })
  return data
}
