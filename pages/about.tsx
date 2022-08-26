import { Footer, Header } from '@/components/common/index'
import type { NextPage } from 'next'
import Link from 'next/link'
import { MainLayout } from '@/components/layout'
import { HomeS } from '@/components/content/home'

export interface AboutPageProps{}

export function AboutPage(props: AboutPageProps) {

  return (
      <div className="tm-page-wrap mx-auto">
        <Header></Header>
        <MainLayout>
          <main>
            <div className="container-fluid px-0">
                <div className="mx-auto tm-content-container">
                    <div className="row mt-3 pb-3">
                        <div className="col-12">
                          <div className="mx-auto tm-about-text-container px-3">
                            <HomeS></HomeS>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
          </main>
        </MainLayout>
        <Footer></Footer>
    </div>
  )
}

AboutPage.Layout = MainLayout