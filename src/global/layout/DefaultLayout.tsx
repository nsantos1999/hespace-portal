'use client';
import { Navbar } from '../components/Navbar';

interface DefaultLayoutProps extends React.PropsWithChildren {
  extraNavbarComponent?: React.ReactNode;
}

export function DefaultLayout({ children, extraNavbarComponent }: DefaultLayoutProps) {
  return (
    <>
      <Navbar extraComponent={extraNavbarComponent} />
      {children}
    </>
  );
}
