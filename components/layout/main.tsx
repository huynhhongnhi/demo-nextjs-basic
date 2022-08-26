import { Footer, Header } from '../common'
import { LayoutProps } from '@/model/index';

export interface MainLayoutProps{}

export function MainLayout({ children }: LayoutProps ) {
  return (
    <div className="tm-page-wrap mx-auto">
        <Header></Header>
        <main>
        <div className="container-fluid px-0">
            <div className="mx-auto tm-content-container">
                <div className="row mt-3 pb-3">
                    <div className="col-12">
                        <div className="mx-auto tm-about-text-container px-3">
                            { children }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
        <Footer></Footer>
    </div>
  )
}