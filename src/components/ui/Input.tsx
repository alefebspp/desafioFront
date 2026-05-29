import type { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export function Input({ label, id, className = '', ...props }: InputProps) {
  const inputId = id ?? props.name

  return (
    <div className="flex flex-col gap-2 text-left">
      <label htmlFor={inputId} className="text-xs uppercase tracking-widest text-muted">
        {label}
      </label>
      <input
        id={inputId}
        className={`w-full rounded-sm border border-border bg-surface-raised px-4 py-3 text-cream placeholder:text-muted/60 focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime/30 ${className}`}
        {...props}
      />
    </div>
  )
}
