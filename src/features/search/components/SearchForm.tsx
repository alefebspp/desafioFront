import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../components/ui/Button'
import { Input } from '../../../components/ui/Input'

export function SearchForm() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmed = username.trim()
    if (!trimmed) return
    navigate(`/users/${encodeURIComponent(trimmed)}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-md flex-col gap-4"
      data-testid="search-form"
    >
      <Input
        label="Usuário do GitHub"
        name="username"
        type="search"
        placeholder="ex: torvalds"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoComplete="off"
        autoFocus
        required
        data-testid="search-input"
      />
      <Button type="submit" data-testid="search-submit">
        Buscar perfil
      </Button>
    </form>
  )
}
