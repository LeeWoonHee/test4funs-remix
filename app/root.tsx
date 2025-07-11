import type {LinksFunction} from '@remix-run/node';
import {Links, Meta, Outlet, Scripts, ScrollRestoration} from '@remix-run/react';
import logo from '~/assets/semo-logo.svg';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import '~/styles/main.scss';

export const links: LinksFunction = () => [{rel: 'icon', href: logo}];

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang='ko'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='h-full bg-[#fbf6ff]'>
        <Header />
        <main className='w-full h-screen'>{children}</main>

        <ScrollRestoration />
        <Scripts />
        <Footer />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
