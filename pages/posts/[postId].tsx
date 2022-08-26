import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailPageProps {

}

export default function PosDetailtPage(props: PostDetailPageProps) {

    const router = useRouter()

    return (
        <>
            <h1>Post Detail Page</h1>
            <div>
                <p>Query: { JSON.stringify(router.query) }</p>
            </div>
        </>
    )
}