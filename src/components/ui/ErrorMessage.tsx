type ErrorMessageProps = {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div
      role="alert"
      className="rounded-sm border border-coral/40 bg-coral/10 px-4 py-3 text-sm text-coral"
    >
      {message}
    </div>
  )
}
