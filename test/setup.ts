import { vi } from 'vitest'
import { http } from 'viem'
import { createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { mock } from 'wagmi/connectors'

Date.now = vi.fn(() => new Date().getTime())

export const config = createConfig({
  chains: [mainnet],
  connectors: [
    mock({
      accounts: ['0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'],
    }),
  ],
  pollingInterval: 100,
  storage: null,
  transports: {
    [mainnet.id]: http(),
  },
})
