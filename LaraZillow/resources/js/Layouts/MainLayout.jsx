import { Link } from '@inertiajs/react'
import { useEffect, useState } from 'react'

const MainLayout = ({ children }) => {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <>
      <Link href="/">Main Page</Link>&nbsp;
      <Link href="/hello">Show Page</Link>
      <div>The page with time {timer}</div>
      {children}
    </>
  )
}

export default MainLayout
