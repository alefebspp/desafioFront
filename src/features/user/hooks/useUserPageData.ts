import { useGithubQuery } from '../../../lib/useGithubQuery'
import type { GithubRepository, GithubUser } from '../../../types/github'
import { fetchGithubRepos, fetchGithubUser } from '../api/github-user'

const EMPTY_REPOS: GithubRepository[] = []

type UseUserPageDataResult = {
  user: GithubUser | null
  repos: GithubRepository[]
  isLoading: boolean
  userError: string | null
  reposError: string | null
}

export function useUserPageData(username: string): UseUserPageDataResult {
  const {
    data: user,
    isLoading: userLoading,
    error: userError,
  } = useGithubQuery<GithubUser | null>(() => fetchGithubUser(username), [username], null)

  const {
    data: repos,
    isLoading: reposLoading,
    error: reposError,
  } = useGithubQuery(() => fetchGithubRepos(username), [username], EMPTY_REPOS)

  return {
    user,
    repos,
    isLoading: userLoading || reposLoading,
    userError,
    reposError,
  }
}
