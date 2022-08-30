import type { GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { MainLayout } from '@/components/layout';
import { HomeS } from '@/components/content/home';
import { NextPageWithLayout } from '../model';
export interface PostListPageProps {
	posts: any[]
}

export default function Home(props: NextPageWithLayout & PostListPageProps) {
  return (
    <div>
      <HomeS data={props.posts}></HomeS>
    </div>
  )
}

Home.Layout = MainLayout

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
	context: GetStaticPropsContext
) => {
	const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
	const data = await response.json();

	return {
		props: {
			posts: data.data.map((x: any) => ({ id: x.id, title: x.title })),
		},
	}
}