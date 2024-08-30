import { useAccount } from 'wagmi'
import { connect, disconnect } from '@wagmi/core'
import { expect, test, beforeAll, afterAll } from 'vitest'

import { renderHook } from './react'
import { config } from './setup'

beforeAll(async () => {
  await connect(config, { connector: config.connectors[0]! })
})

afterAll(async () => {
  await disconnect(config)
})

test('test the tests', () => {
  expect(1 + 1).toBe(2)
})

test('default', async () => {
  const { result } = renderHook(() => useAccount())

  expect(result.current.address).toBeDefined()
  expect(result.current.status).toEqual('connected')
})
