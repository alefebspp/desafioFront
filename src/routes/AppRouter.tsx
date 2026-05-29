import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../features/search/pages/HomePage'
import { RepositoryPage } from '../features/repository/pages/RepositoryPage'
import { UserPage } from '../features/user/pages/UserPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/:username" element={<UserPage />} />
        <Route path="/users/:username/repos/:repoName" element={<RepositoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}
