import { useGithubQuery } from '../../../lib/useGithubQuery'
import type { GithubRepository } from '../../../types/github'
import { fetchGithubRepository } from '../api/github-repository'

type UseGithubRepositoryResult = {
  repository: GithubRepository | null
  isLoading: boolean
  error: string | null
}

export function useGithubRepository(
  owner: string,
  repo: string,
): UseGithubRepositoryResult {
  const { data: repository, isLoading, error } = useGithubQuery<GithubRepository | null>(
    () => fetchGithubRepository(owner, repo),
    [owner, repo],
    null,
  )

  return { repository, isLoading, error }
}
