import { useGithubQuery } from '../../../lib/useGithubQuery'
import type { GithubRepository } from '../../../types/github'
import { fetchGithubRepos } from '../api/github-user'

const EMPTY_REPOS: GithubRepository[] = []

type UseGithubReposResult = {
  repos: GithubRepository[]
  isLoading: boolean
  error: string | null
}

export function useGithubRepos(username: string): UseGithubReposResult {
  const { data: repos, isLoading, error } = useGithubQuery(
    () => fetchGithubRepos(username),
    [username],
    EMPTY_REPOS,
  )

  return { repos, isLoading, error }
}
