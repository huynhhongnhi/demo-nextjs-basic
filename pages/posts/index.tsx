import { authApi } from '@/api/auth-api';
import { MainLayout } from '@/components/layout';
import { IUser } from '@/model/user';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostPageProps {}

export default function PostPage(props: PostPageProps) {

    const router = useRouter();
    const [ profile, setProfile ] =  React.useState<IUser>({username:'', email: ''});

    function goToDetailPage() {
        router.push({
            pathname: '/posts/[postId]',
            query: {
                postId: 123,
                ref: 'social'
            }
        });
    }

    React.useEffect( () => {
        async function getProfile() {
            const res = await authApi.getProfile();
            if (res && res.data) {
                const { data } = res.data;
                setProfile(data);
            } else {
                router.push('/')
            }
        }
        getProfile();
       
    }, []);

    return (
        <div>
            <h2>Show info auth</h2>
            <div>
                <p>{ (profile) ? profile.username : '' }</p>
                <p>{ (profile) ? profile.email : '' }</p>
            </div>
            {/* <button onClick={goToDetailPage}>Detail</button> */}
        </div>
    )
}

PostPage.Layout = MainLayout;
