import { Link } from 'react-router-dom'
import type { GithubRepository } from '../../../types/github'

type RepoCardProps = {
  repo: GithubRepository
  username: string
}

export function RepoCard({ repo, username }: RepoCardProps) {
  return (
    <li className="h-full min-w-0">
      <Link
        to={`/users/${encodeURIComponent(username)}/repos/${encodeURIComponent(repo.name)}`}
        className="group flex h-full min-w-0 flex-col overflow-hidden rounded-sm border border-border bg-surface p-4 transition-all duration-200 hover:border-lime/50 hover:bg-surface-raised"
        data-testid="repo-card"
      >
        <div className="flex min-w-0 items-start justify-between gap-3">
          <h3 className="min-w-0 flex-1 truncate font-display text-lg font-semibold text-cream group-hover:text-lime">
            {repo.name}
          </h3>
          <span className="shrink-0 rounded-sm bg-lime/10 px-2 py-0.5 text-xs text-lime">
            ★ {repo.stargazers_count.toLocaleString('pt-BR')}
          </span>
        </div>
        <p
          className="mt-2 min-h-5 min-w-0 truncate text-sm text-muted"
          title={repo.description ?? undefined}
        >
          {repo.description ?? ''}
        </p>
        <div className="mt-auto flex min-w-0 flex-wrap gap-3 pt-3 text-xs text-muted">
          {repo.language && (
            <span className="max-w-full truncate rounded-sm border border-border px-2 py-0.5">
              {repo.language}
            </span>
          )}
          <span>{repo.forks_count} forks</span>
        </div>
      </Link>
    </li>
  )
}
