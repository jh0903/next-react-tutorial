import React from 'react';
import Header from './header';

interface GlobalLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: GlobalLayoutProps) {
  return (
    <div className="pt-16">
      <Header />
      <main>{children}</main>
    </div>
  );
}
