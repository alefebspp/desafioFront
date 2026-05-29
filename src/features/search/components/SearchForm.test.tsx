import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { SearchForm } from './SearchForm'

function renderSearchForm(initialPath = '/') {
  const router = createMemoryRouter(
    [
      { path: '/', element: <SearchForm /> },
      { path: '/users/:username', element: <div data-testid="user-page">Perfil</div> },
    ],
    { initialEntries: [initialPath] },
  )
  return render(<RouterProvider router={router} />)
}

describe('SearchForm', () => {
  it('navigates to user page on submit', async () => {
    const user = userEvent.setup()
    renderSearchForm()

    await user.type(screen.getByTestId('search-input'), 'octocat')
    await user.click(screen.getByTestId('search-submit'))

    expect(screen.getByTestId('user-page')).toBeInTheDocument()
  })

  it('does not navigate with empty username', async () => {
    const user = userEvent.setup()
    renderSearchForm()

    await user.click(screen.getByTestId('search-submit'))

    expect(screen.queryByTestId('user-page')).not.toBeInTheDocument()
    expect(screen.getByTestId('search-form')).toBeInTheDocument()
  })
})
