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
      <body>{children}</body>
    </html>
  );
}
