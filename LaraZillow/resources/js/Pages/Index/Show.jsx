import MainLayout from '@/Layouts/MainLayout'
import { Link } from '@inertiajs/react'

const Show = () => {
  return (
    <>
      <div>Show</div>
      <Link href="/">Index Page</Link>
    </>
  )
}

Show.layout = page => <MainLayout>{page}</MainLayout>

export default Show
