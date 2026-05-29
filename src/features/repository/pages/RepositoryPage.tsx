import { Link, useParams } from 'react-router-dom'
import { ErrorMessage } from '../../../components/ui/ErrorMessage'
import { LoadingSpinner } from '../../../components/ui/LoadingSpinner'
import { PageLayout } from '../../../components/ui/PageLayout'
import { RepositoryDetails } from '../components/RepositoryDetails'
import { useGithubRepository } from '../hooks/useGithubRepository'

export function RepositoryPage() {
  const { username = '', repoName = '' } = useParams<{
    username: string
    repoName: string
  }>()
  const { repository, isLoading, error } = useGithubRepository(username, repoName)

  return (
    <PageLayout>
      <nav className="mb-6 flex flex-wrap gap-4 text-sm animate-rise">
        <Link to="/" className="text-muted transition-colors hover:text-lime">
          ← Início
        </Link>
        <Link
          to={`/users/${encodeURIComponent(username)}`}
          className="text-muted transition-colors hover:text-lime"
        >
          ← @{username}
        </Link>
      </nav>

      {isLoading && <LoadingSpinner label="Carregando repositório..." />}

      {error && !isLoading && <ErrorMessage message={error} />}

      {repository && !isLoading && !error && (
        <div className="animate-rise">
          <RepositoryDetails repository={repository} />
        </div>
      )}
    </PageLayout>
  )
}
