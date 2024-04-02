import { Link } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'

const Index = () => {
  return (
    <>
      <div>Index</div>
      <Link href="/hello">Show Page</Link>
    </>
  )
}

Index.layout = page => <MainLayout>{page}</MainLayout>

export default Index
