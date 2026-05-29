import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type PageLayoutProps = {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="relative z-10 mx-auto min-h-svh max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-12 flex items-center justify-between border-b border-border pb-6 animate-rise">
        <Link
          to="/"
          className="group flex items-baseline gap-2 font-display text-xl font-extrabold tracking-tight text-cream"
        >
          <span className="text-lime transition-colors group-hover:text-teal">◆</span>
          GitScope
        </Link>
        <p className="hidden text-xs text-muted sm:block">Explorador de perfis GitHub</p>
      </header>
      <main>{children}</main>
    </div>
  )
}
