import React from 'react'
import { Navbar } from './navbar'
import { Logo } from './logo'

export interface HeaderProps{}

export function Header(props: HeaderProps) {
  return (
        <div className="position-relative">
          <div className="potition-absolute tm-site-header">
            <div className="container-fluid position-relative">
              <div className="row">
    	          <Logo></Logo>
                <div className="col-5 col-md-8 ml-auto mr-0">
                    <div className="tm-site-nav">
                     <Navbar></Navbar>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tm-welcome-container tm-fixed-header tm-fixed-header-1">
            <div className="text-center">
              <p className="pt-5 px-3 tm-welcome-text tm-welcome-text-2 mb-1 text-white mx-auto">Background image can be fixed. Content will simply slide over.</p>                	
            </div>                
          </div>
          <div id="tm-fixed-header-bg"></div> 
        </div>
      )
}