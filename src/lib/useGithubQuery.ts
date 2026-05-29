import { useEffect, useState } from 'react'
import { getApiErrorMessage } from './api-client'

type UseGithubQueryResult<T> = {
  data: T
  isLoading: boolean
  error: string | null
}

export function useGithubQuery<T>(
  fetcher: () => Promise<T>,
  deps: readonly unknown[],
  initialData: T,
): UseGithubQueryResult<T> {
  const [data, setData] = useState<T>(initialData)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setIsLoading(true)
      setError(null)
      setData(initialData)

      try {
        const result = await fetcher()
        if (!cancelled) {
          setData(result)
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
  }, deps)

  return { data, isLoading, error }
}
