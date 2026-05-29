import type { GithubUser } from '../../../types/github'

type UserProfileProps = {
  user: GithubUser
}

export function UserProfile({ user }: UserProfileProps) {
  const displayName = user.name ?? user.login
  const email = user.email ?? 'Não informado'

  return (
    <article
      className="flex flex-col gap-6 rounded-sm border border-border bg-surface-raised p-6 sm:flex-row sm:items-start"
      data-testid="user-profile"
    >
      <img
        src={user.avatar_url}
        alt={`Avatar de ${displayName}`}
        className="h-28 w-28 shrink-0 rounded-sm border-2 border-lime/30 object-cover"
        width={112}
        height={112}
      />
      <div className="flex-1 text-left">
        <h1 className="font-display text-2xl font-bold text-cream sm:text-3xl">{displayName}</h1>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-teal hover:text-lime"
        >
          @{user.login}
        </a>
        {user.bio && (
          <p className="mt-3 text-sm leading-relaxed text-muted">{user.bio}</p>
        )}
        <dl className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted">Seguidores</dt>
            <dd className="font-display text-xl font-semibold text-lime" data-testid="followers">
              {user.followers.toLocaleString('pt-BR')}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted">Seguindo</dt>
            <dd className="font-display text-xl font-semibold text-lime" data-testid="following">
              {user.following.toLocaleString('pt-BR')}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted">Repositórios</dt>
            <dd className="font-display text-xl font-semibold text-lime">
              {user.public_repos.toLocaleString('pt-BR')}
            </dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt className="text-xs uppercase tracking-wider text-muted">E-mail</dt>
            <dd className="truncate text-sm text-cream" data-testid="user-email">
              {email}
            </dd>
          </div>
        </dl>
      </div>
    </article>
  )
}
