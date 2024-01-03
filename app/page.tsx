import { LogIn } from '@/components/Login'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black/15 p-24">
      <LogIn />
    </main>
  )
}
