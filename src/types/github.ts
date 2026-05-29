export type GithubUser = {
  login: string
  name: string | null
  avatar_url: string
  bio: string | null
  email: string | null
  followers: number
  following: number
  public_repos: number
  html_url: string
}

export type GithubRepository = {
  id: number
  name: string
  full_name: string
  description: string | null
  stargazers_count: number
  language: string | null
  html_url: string
  forks_count: number
  updated_at: string
  owner: {
    login: string
  }
}

export type RepoSortOption =
  | 'stars-desc'
  | 'stars-asc'
  | 'name-asc'
  | 'name-desc'
  | 'updated-desc'
  | 'updated-asc'
  | 'forks-desc'
