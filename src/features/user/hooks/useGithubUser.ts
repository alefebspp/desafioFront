import { useGithubQuery } from '../../../lib/useGithubQuery'
import type { GithubUser } from '../../../types/github'
import { fetchGithubUser } from '../api/github-user'

type UseGithubUserResult = {
  user: GithubUser | null
  isLoading: boolean
  error: string | null
}

export function useGithubUser(username: string): UseGithubUserResult {
  const { data: user, isLoading, error } = useGithubQuery<GithubUser | null>(
    () => fetchGithubUser(username),
    [username],
    null,
  )

  return { user, isLoading, error }
}
