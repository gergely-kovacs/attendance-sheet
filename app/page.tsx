import prisma from '@/lib/prisma';
import LoginButton from './components/login-button';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginButton />
    </main>
  )
}
