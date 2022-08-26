import Link from 'next/link';
import { LayoutProps } from '@/model/index';

export interface AdminLayoutProps{}

export function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Admin Layout</h1>
      <div>Sidebar</div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/posts"><a>Post</a></Link>
      <div>{ children }</div>
    </div>
  )
}