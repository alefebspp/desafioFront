import axios from 'axios'
import { describe, expect, it } from 'vitest'
import { getApiErrorMessage } from './api-client'

describe('getApiErrorMessage', () => {
  it('returns friendly message for 404', () => {
    const error = new axios.AxiosError('Not Found', 'ERR_BAD_REQUEST', undefined, undefined, {
      status: 404,
      data: {},
      statusText: 'Not Found',
      headers: {},
      config: {} as never,
    })
    expect(getApiErrorMessage(error)).toBe('Usuário ou repositório não encontrado.')
  })

  it('returns friendly message for 403', () => {
    const error = new axios.AxiosError('Forbidden', 'ERR_BAD_REQUEST', undefined, undefined, {
      status: 403,
      data: {},
      statusText: 'Forbidden',
      headers: {},
      config: {} as never,
    })
    expect(getApiErrorMessage(error)).toBe(
      'Limite de requisições da API excedido. Tente novamente em instantes.',
    )
  })
})
