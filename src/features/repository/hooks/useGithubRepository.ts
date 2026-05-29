import { useEffect, useState } from 'react'
import { getApiErrorMessage } from '../../../lib/api-client'
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
  const [repository, setRepository] = useState<GithubRepository | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setIsLoading(true)
      setError(null)
      setRepository(null)

      try {
        const data = await fetchGithubRepository(owner, repo)
        if (!cancelled) {
          setRepository(data)
        }
      } catch (err) {
        if (!cancelled) {
          setError(getApiErrorMessage(err))
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false)
        }
      }
    }

    void load()

    return () => {
      cancelled = true
    }
  }, [owner, repo])

  return { repository, isLoading, error }
}
