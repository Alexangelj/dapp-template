import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Home = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <h1 className="text-2xl font-bold">dapp template</h1>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
      <p>Count: {count}</p>
      <ConnectButton />
    </div>
  )
}

export default Home
