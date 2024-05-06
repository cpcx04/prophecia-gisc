'use client'
// pages/index.js

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  });

  return null;
}

export default LoginPage;
