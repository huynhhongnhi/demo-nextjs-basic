import { Footer, Header } from '@/components/common/index'
import type { NextPage } from 'next'
import { MainLayout } from '@/components/layout'
import { HomeS } from '@/components/content/home'
import { NextPageWithLayout } from '../model'

const Home: NextPageWithLayout = () => {

  return (
    <div>
      <HomeS></HomeS>
    </div>
  )
}

Home.Layout = MainLayout

export default Home
