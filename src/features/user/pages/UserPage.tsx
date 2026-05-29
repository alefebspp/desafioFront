import { Link, useParams } from 'react-router-dom'
import { ErrorMessage } from '../../../components/ui/ErrorMessage'
import { LoadingSpinner } from '../../../components/ui/LoadingSpinner'
import { PageLayout } from '../../../components/ui/PageLayout'
import { RepoList } from '../components/RepoList'
import { UserProfile } from '../components/UserProfile'
import { useGithubRepos } from '../hooks/useGithubRepos'
import { useGithubUser } from '../hooks/useGithubUser'

export function UserPage() {
  const { username = '' } = useParams<{ username: string }>()
  const { user, isLoading: userLoading, error: userError } = useGithubUser(username)
  const { repos, isLoading: reposLoading, error: reposError } = useGithubRepos(username)

  const isLoading = userLoading || reposLoading
  const error = userError ?? reposError

  return (
    <PageLayout>
      <nav className="mb-6 animate-rise">
        <Link to="/" className="text-sm text-muted transition-colors hover:text-lime">
          ← Nova busca
        </Link>
      </nav>

      {isLoading && <LoadingSpinner label="Buscando perfil e repositórios..." />}

      {error && !isLoading && <ErrorMessage message={error} />}

      {user && !isLoading && !error && (
        <div className="animate-rise">
          <UserProfile user={user} />
          {reposError ? (
            <ErrorMessage message={reposError} />
          ) : (
            <RepoList repos={repos} username={username} />
          )}
        </div>
      )}
    </PageLayout>
  )
}
