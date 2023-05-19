import './globals.css';
import { Syne, Work_Sans } from "next/font/google";
import localFont from 'next/font/local';

const syne = Syne({
  subsets: ['greek'],
  variable: '--font-syne',
});

const work = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work',
});

const conthrax = localFont({
  src: [
    {
      path: '../../public/fonts/conthrax-sb.otf'
    },
  ],
  variable: '--font-conthrax'
});

export const metadata = {
  title: "Xelmar: Top Web3 Product Studio",
  description: "Web3 Product Studio",
};


// export { syne, work };

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className={`${conthrax.variable} ${syne.variable} ${work.variable}`}>
      <meta property="og:title" content="Xelmar: Top Web3 Product Studio" />
      <meta property="og:description" content="A product studio that specializes in building user interfaces (UI)
      for decentralized applications (dApps) and other web3 technologies."/>
      <meta property="og:image" content="https://i.postimg.cc/8cMH8QHV/Xelmar-Previe-Link.png"/>
      <body>{children}</body>
    </html>
  );
}
