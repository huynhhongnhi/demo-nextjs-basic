import { authApi } from '@/api/auth-api';
import { MainLayout } from '@/components/layout';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {

  const [email, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if ( !email || !password ) {
      console.log('Not params');
      return;
    }

    const res = await authApi.login({ email, password });
    if (res) {
      router.push('/')
    }
  }

    return (
        <div className="auth-form-container">
          <form className="auth-form">
            <div className="auth-form-content">
              <h3 className="auth-form-title">Sign In</h3>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  onChange={e => setUserName(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3 text-center">
                <button onClick={handleSubmit} type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )
}

LoginPage.Layout = MainLayout;