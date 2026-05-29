import { useEffect, useState } from 'react'
import { getApiErrorMessage } from '../../../lib/api-client'
import type { GithubRepository } from '../../../types/github'
import { fetchGithubRepos } from '../api/github-user'

type UseGithubReposResult = {
  repos: GithubRepository[]
  isLoading: boolean
  error: string | null
}

export function useGithubRepos(username: string): UseGithubReposResult {
  const [repos, setRepos] = useState<GithubRepository[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setIsLoading(true)
      setError(null)
      setRepos([])

      try {
        const data = await fetchGithubRepos(username)
        if (!cancelled) {
          setRepos(data)
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
  }, [username])

  return { repos, isLoading, error }
}
