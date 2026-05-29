export function LoadingSpinner({ label = 'Carregando...' }: { label?: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 py-16"
      role="status"
      aria-live="polite"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-border border-t-lime" />
      <p className="text-sm text-muted">{label}</p>
    </div>
  )
}
