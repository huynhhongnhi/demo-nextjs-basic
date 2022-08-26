import { useRouter } from 'next/router';
import * as React from 'react';

export interface ParamPageProps {

}

export default function ParamPage(props: ParamPageProps) {

    const router = useRouter()

    return (
        <>
            <h1>Params Page</h1>
            <div>
                <p>Query: { JSON.stringify(router.query) }</p>
            </div>
        </>
    )
}