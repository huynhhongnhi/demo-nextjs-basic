import React from 'react'

export interface LogoProps{}

export function Logo(props: LogoProps) {
    return (
    <div className="col-7 col-md-4">
        <a href="#" className="tm-bg-black text-center tm-logo-container">
            <i className="fas fa-video tm-site-logo mb-3"></i>
            <h1 className="tm-site-name">Demo</h1>
        </a>
    </div>
  )
}