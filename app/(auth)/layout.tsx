import LoginFooter from '@/components/footer/login-footer';
import Header from '@/components/header';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 flex justify-center items-center p-4'>
        {children}
      </main>
      <LoginFooter />
    </div>
  );
}
