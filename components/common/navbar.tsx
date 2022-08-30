import Link from 'next/link';
import { useRouter } from 'next/router'

export interface NavbarProps{}

export function Navbar(props: NavbarProps) {

    const { pathname } = useRouter();

    return (
        <nav className="navbar navbar-expand-lg mr-0 ml-auto" id="tm-main-nav">
            <button className="navbar-toggler tm-bg-black py-2 px-3 mr-0 ml-auto collapsed" type="button"
                data-toggle="collapse" data-target="#navbar-nav" aria-controls="navbar-nav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span>
                    <i className="fas fa-bars tm-menu-closed-icon"></i>
                    <i className="fas fa-times tm-menu-opened-icon"></i>
                </span>
            </button>
            <div className="collapse navbar-collapse tm-nav" id="navbar-nav">
                <ul className="navbar-nav text-uppercase">
                    <li className={`${pathname === '/' ? 'nav-item active' : 'nav-item'}`}>
                        <Link href="/"><a className="nav-link tm-nav-link">Home</a></Link>
                    </li>
                    <li className={`${pathname === '/posts' ? 'nav-item active' : 'nav-item'}`}>
                        <Link href="/posts"><a className="nav-link tm-nav-link">Admin</a></Link>
                    </li>
                    <li className={`${pathname === '/login' ? 'nav-item active' : 'nav-item'}`}>
                        <Link href="/login"><a className="nav-link tm-nav-link">Login</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}