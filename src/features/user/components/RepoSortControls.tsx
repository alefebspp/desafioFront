import type { RepoSortOption } from '../../../types/github'
import { REPO_SORT_LABELS } from '../utils/sortRepos'

type RepoSortControlsProps = {
  value: RepoSortOption
  onChange: (value: RepoSortOption) => void
}

const SORT_OPTIONS = Object.keys(REPO_SORT_LABELS) as RepoSortOption[]

export function RepoSortControls({ value, onChange }: RepoSortControlsProps) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <label htmlFor="repo-sort" className="text-xs uppercase tracking-widest text-muted">
        Ordenar por
      </label>
      <select
        id="repo-sort"
        value={value}
        onChange={(e) => onChange(e.target.value as RepoSortOption)}
        className="rounded-sm border border-border bg-surface px-3 py-2 text-sm text-cream focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime/30"
        data-testid="repo-sort"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {REPO_SORT_LABELS[option]}
          </option>
        ))}
      </select>
    </div>
  )
}
