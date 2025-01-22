import './globals.css';

import Header from './_components/layout/header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '장현지 포트폴리오',
  description: '장현지의 포트폴리오 사이트입니다',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
