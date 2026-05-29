import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github+json',
  },
})

export function getApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 404) {
      return 'Usuário ou repositório não encontrado.'
    }
    if (error.response?.status === 403) {
      return 'Limite de requisições da API excedido. Tente novamente em instantes.'
    }
    return error.response?.data?.message ?? error.message
  }
  if (error instanceof Error) {
    return error.message
  }
  return 'Ocorreu um erro inesperado.'
}
