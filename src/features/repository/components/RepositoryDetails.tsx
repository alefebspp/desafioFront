import type { GithubRepository } from '../../../types/github'

type RepositoryDetailsProps = {
  repository: GithubRepository
}

export function RepositoryDetails({ repository }: RepositoryDetailsProps) {
  return (
    <article
      className="rounded-sm border border-border bg-surface-raised p-6 sm:p-8"
      data-testid="repository-details"
    >
      <header className="border-b border-border pb-6">
        <h1 className="font-display text-3xl font-bold text-cream">{repository.name}</h1>
        <p className="mt-1 text-sm text-muted">{repository.full_name}</p>
      </header>

      <dl className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <dt className="text-xs uppercase tracking-wider text-muted">Descrição</dt>
          <dd className="mt-1 text-sm leading-relaxed text-cream">
            {repository.description ?? 'Sem descrição'}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-muted">Estrelas</dt>
          <dd
            className="mt-1 font-display text-2xl font-semibold text-lime"
            data-testid="repo-stars"
          >
            {repository.stargazers_count.toLocaleString('pt-BR')}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-muted">Linguagem</dt>
          <dd className="mt-1 text-sm text-cream" data-testid="repo-language">
            {repository.language ?? 'Não especificada'}
          </dd>
        </div>
      </dl>

      <a
        href={repository.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-sm bg-lime px-5 py-2.5 font-display text-sm font-semibold text-ink transition-colors hover:bg-lime/90"
        data-testid="repo-external-link"
      >
        Ver no GitHub →
      </a>
    </article>
  )
}
