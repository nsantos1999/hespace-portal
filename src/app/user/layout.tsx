import { AuthGuard } from '@/modules/auth/guards/auth.guard';

interface UserLayoutProps extends React.PropsWithChildren {}

export default function UserLayout({ children }: UserLayoutProps) {
  return <AuthGuard>{children}</AuthGuard>;
}
