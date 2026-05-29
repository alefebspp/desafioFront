import { apiClient } from '../../../lib/api-client'
import type { GithubRepository } from '../../../types/github'

export async function fetchGithubRepository(
  owner: string,
  repo: string,
): Promise<GithubRepository> {
  const { data } = await apiClient.get<GithubRepository>(`/repos/${owner}/${repo}`)
  return data
}
