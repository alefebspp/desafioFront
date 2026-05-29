import { useEffect, useState } from 'react'
import { getApiErrorMessage } from '../../../lib/api-client'
import type { GithubUser } from '../../../types/github'
import { fetchGithubUser } from '../api/github-user'

type UseGithubUserResult = {
  user: GithubUser | null
  isLoading: boolean
  error: string | null
}

export function useGithubUser(username: string): UseGithubUserResult {
  const [user, setUser] = useState<GithubUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setIsLoading(true)
      setError(null)
      setUser(null)

      try {
        const data = await fetchGithubUser(username)
        if (!cancelled) {
          setUser(data)
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

  return { user, isLoading, error }
}
