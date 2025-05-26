import { ReactQueryProvider } from '@/global/providers/react-query.provider';
import { AuthProvider } from '@/modules/auth/providers/AuthProvider';
import { FakeAuthProvider } from '@/modules/auth/providers/FakeAuthProvider';

export function GlobalProviders({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <ReactQueryProvider>
      {/* <AuthProvider>{children}</AuthProvider> */}
      <FakeAuthProvider>{children}</FakeAuthProvider>
    </ReactQueryProvider>
  );
}
