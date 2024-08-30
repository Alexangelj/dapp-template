import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { http, WagmiProvider } from 'wagmi'
import { mainnet } from 'viem/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  RainbowKitProvider,
  darkTheme,
  getDefaultConfig,
} from '@rainbow-me/rainbowkit'

import Root from '@/components/Root'
import Home from '@/components/Home'
import { ThemeProvider } from '@/components/theme-provider'

export const config = getDefaultConfig({
  appName: 'dapp template',
  chains: [mainnet],
  projectId: 'YOUR_PROJECT_ID',
  transports: {
    [mainnet.id]: http(),
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])

const queryClient = new QueryClient()

function App(): JSX.Element {
  useEffect(() => {
    document.onkeyup = (e) => {
      if (e.code === 'Space') {
        document.querySelector('html')?.setAttribute('data-theme', 'variant2')
      }
    }
  }, [])

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: 'white',
            accentColorForeground: 'black',
            borderRadius: 'small',
          })}
          initialChain={mainnet}
        >
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
          </ThemeProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
