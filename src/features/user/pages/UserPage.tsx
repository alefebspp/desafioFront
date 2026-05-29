import { Link, useParams } from 'react-router-dom'
import { ErrorMessage } from '../../../components/ui/ErrorMessage'
import { LoadingSpinner } from '../../../components/ui/LoadingSpinner'
import { PageLayout } from '../../../components/ui/PageLayout'
import { RepoList } from '../components/RepoList'
import { UserProfile } from '../components/UserProfile'
import { useUserPageData } from '../hooks/useUserPageData'

export function UserPage() {
  const { username = '' } = useParams<{ username: string }>()
  const { user, repos, isLoading, userError, reposError } = useUserPageData(username)

  return (
    <PageLayout>
      <nav className="mb-6 animate-rise">
        <Link to="/" className="text-sm text-muted transition-colors hover:text-lime">
          ← Nova busca
        </Link>
      </nav>

      {isLoading && <LoadingSpinner label="Buscando perfil e repositórios..." />}

      {userError && !isLoading && <ErrorMessage message={userError} />}

      {user && !isLoading && !userError && (
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
