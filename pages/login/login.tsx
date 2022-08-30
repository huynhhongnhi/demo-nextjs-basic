import { MainLayout } from '@/components/layout';
import * as React from 'react';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
    return (
        <div>
            <h2>Login Page</h2>
        </div>
    )
}

LoginPage.Layout = MainLayout;