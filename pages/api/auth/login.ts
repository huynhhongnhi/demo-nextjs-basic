// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy, { ProxyResCallback } from 'http-proxy';
const Cookies = require('cookies');

export const config = {
  api: {
    bodyParser: false
  }
}

type Data = {
  message: string
}

const proxy = httpProxy.createProxyServer()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'method not support' })
  }

  return new Promise((resolve) => {
    req.headers.cookie = '';

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = '';
      proxyRes.on('data', function (chunk) {
        body += chunk;
      })

      proxyRes.on('end', function () {
        try {
          const { data } = JSON.parse(body)
          const cookie = new Cookies(req, res, { sucure: process.env.NODE_ENV !== 'development' });
          cookie.set(
            'access_token', data.token, {
              httpOnly: true,
              sameSite: 'lax'
            }
          )
          ;(res as NextApiResponse).status(200).json({message: 'login thanh cong'})
        } catch (error) {
          (res as NextApiResponse).status(500).json({message: 'login error'})
        }
      })
    }

    proxy.once('proxyRes', handleLoginResponse)
    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true
    });
  });

}
