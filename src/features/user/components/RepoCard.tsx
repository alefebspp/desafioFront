import { Link } from 'react-router-dom'
import type { GithubRepository } from '../../../types/github'

type RepoCardProps = {
  repo: GithubRepository
  username: string
}

export function RepoCard({ repo, username }: RepoCardProps) {
  return (
    <li>
      <Link
        to={`/users/${encodeURIComponent(username)}/repos/${encodeURIComponent(repo.name)}`}
        className="group block rounded-sm border border-border bg-surface p-4 transition-all duration-200 hover:border-lime/50 hover:bg-surface-raised"
        data-testid="repo-card"
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-cream group-hover:text-lime">
            {repo.name}
          </h3>
          <span className="shrink-0 rounded-sm bg-lime/10 px-2 py-0.5 text-xs text-lime">
            ★ {repo.stargazers_count.toLocaleString('pt-BR')}
          </span>
        </div>
        {repo.description && (
          <p className="mt-2 line-clamp-2 text-sm text-muted">{repo.description}</p>
        )}
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted">
          {repo.language && (
            <span className="rounded-sm border border-border px-2 py-0.5">{repo.language}</span>
          )}
          <span>{repo.forks_count} forks</span>
        </div>
      </Link>
    </li>
  )
}
