'use client'
import { HomeTeste } from '@/Pages/home';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from './Auth';
import "./page.css";

export default function Home() {
  const router = useRouter();

  if (!isAuthenticated()) {
    router.push('/login');
    return <p>Você não está autenticado. Redirecionando para a página de login...</p>;
  }

  return (
    <HomeTeste />
  );
}
