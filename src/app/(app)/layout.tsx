import { Toaster } from '@/components/ui/toaster';
import AuthProvider from '@/providers/AuthProvider';
import StoreProvider from '@/providers/StoreProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AgroFusion',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
      <AuthProvider>
        <StoreProvider>
          <div className="">{children}</div>
          <Toaster />
        </StoreProvider>
      </AuthProvider>
    </div>
  );
}
