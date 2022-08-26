import React from "react"

export interface FooterProps{}

export function Footer(props: FooterProps) {
  return (
    <>
      <div className="row mt-5 pt-3">
        <div className="col-xl-6 col-lg-12 mb-4">
            <div className="tm-bg-gray p-5 h-100">
                <h3 className="tm-text-primary mb-3">Do you want to get our latest updates?</h3>
                <p>
                    Please subscribe our newsletter for upcoming new videos and latest information about our
                    work. Thank you.
                </p>
            </div>
        </div>
        <div className="col-xl-6 col-lg-12 mb-4">
            <div className="p-5 tm-bg-gray tm-send-mail-form">
                <form action="" method="GET" className="tm-subscribe-form">
                    <input type="text" name="email" placeholder="Your Email..." required />
                    <button type="submit" className="btn rounded-0 btn-primary tm-btn-small">Subscribe</button>
                </form>    
            </div>                        
        </div>
    </div>
    <footer className="row pt-5">
        <div className="col-12">
            <p className="text-center">Copyright 2020 The Video Catalog Company 
            - Designed by <a href="https://templatemo.com" rel="nofollow" target="_parent">TemplateMo</a></p>
        </div>
    </footer>
    </>
  )
}