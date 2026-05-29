import { PageLayout } from '../../../components/ui/PageLayout'
import { SearchForm } from '../components/SearchForm'

export function HomePage() {
  return (
    <PageLayout>
      <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-teal animate-rise">
          Desafio Desbravador
        </p>
        <h1 className="mb-4 max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight text-cream sm:text-5xl lg:text-6xl animate-rise-delay-1">
          Os repositórios mais{' '}
          <span className="text-lime underline decoration-coral decoration-wavy underline-offset-4">
            estrelados
          </span>{' '}
          ao seu alcance
        </h1>
        <p className="mb-10 max-w-lg text-sm text-muted animate-rise-delay-2">
          Digite um usuário do GitHub para ver perfil, bio e repositórios ordenados por
          popularidade.
        </p>
        <div className="w-full animate-rise-delay-3">
          <SearchForm />
        </div>
      </section>
    </PageLayout>
  )
}
