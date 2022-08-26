import { MainLayout } from '@/components/layout';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostPageProps {}

export default function PostPage(props: PostPageProps) {

    const router = useRouter();

    function goToDetailPage() {
        router.push({
            pathname: '/posts/[postId]',
            query: {
                postId: 123,
                ref: 'social'
            }
        });
    }

    return (
        <div>
            <h2>List Post Page</h2>
            <button onClick={goToDetailPage}>Detail</button>
        </div>
    )
}

PostPage.Layout = MainLayout;
