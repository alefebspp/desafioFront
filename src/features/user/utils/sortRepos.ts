import type { GithubRepository, RepoSortOption } from '../../../types/github'

export function sortRepositories(
  repos: GithubRepository[],
  sortBy: RepoSortOption,
): GithubRepository[] {
  const sorted = [...repos]

  switch (sortBy) {
    case 'stars-desc':
      return sorted.sort((a, b) => b.stargazers_count - a.stargazers_count)
    case 'stars-asc':
      return sorted.sort((a, b) => a.stargazers_count - b.stargazers_count)
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name))
    case 'updated-desc':
      return sorted.sort(
        (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
      )
    case 'updated-asc':
      return sorted.sort(
        (a, b) => new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime(),
      )
    case 'forks-desc':
      return sorted.sort((a, b) => b.forks_count - a.forks_count)
    default:
      return sorted
  }
}

export const REPO_SORT_LABELS: Record<RepoSortOption, string> = {
  'stars-desc': 'Estrelas (maior)',
  'stars-asc': 'Estrelas (menor)',
  'name-asc': 'Nome (A–Z)',
  'name-desc': 'Nome (Z–A)',
  'updated-desc': 'Atualização (recente)',
  'updated-asc': 'Atualização (antiga)',
  'forks-desc': 'Forks (maior)',
}
