import { useMemo, useState } from 'react'
import type { GithubRepository, RepoSortOption } from '../../../types/github'
import { sortRepositories } from '../utils/sortRepos'
import { RepoCard } from './RepoCard'
import { RepoSortControls } from './RepoSortControls'

type RepoListProps = {
  repos: GithubRepository[]
  username: string
}

export function RepoList({ repos, username }: RepoListProps) {
  const [sortBy, setSortBy] = useState<RepoSortOption>('stars-desc')

  const sortedRepos = useMemo(
    () => sortRepositories(repos, sortBy),
    [repos, sortBy],
  )

  if (repos.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-muted" data-testid="empty-repos">
        Nenhum repositório público encontrado.
      </p>
    )
  }

  return (
    <section className="mt-10 min-w-0" data-testid="repo-list">
      <div className="mb-6 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-display text-xl font-bold text-cream">
          Repositórios
          <span className="ml-2 text-sm font-normal text-muted">({repos.length})</span>
        </h2>
        <RepoSortControls value={sortBy} onChange={setSortBy} />
      </div>
      <ul className="grid min-w-0 auto-rows-fr gap-4 sm:grid-cols-2">
        {sortedRepos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} username={username} />
        ))}
      </ul>
    </section>
  )
}
