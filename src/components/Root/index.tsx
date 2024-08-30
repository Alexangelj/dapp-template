import { Outlet } from 'react-router-dom'

function Root(): JSX.Element {
  return (
    <div className={`flex flex-col justify-between font-primary min-h-screen`}>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
}

export default Root
