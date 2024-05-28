'use client';

import '../global.css';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import NavBar from '../ui/navbar';

export default function MainLayout({ children }) {
    const pathname = usePathname();
    const [animation, setAnimation] = useState('');

    useEffect(() => {
        if (pathname === '/prophecia') {
            setAnimation('animate-fade-right');
        } else if (pathname === '/paciente') {
            setAnimation('animate-fade-left');
        } else {
            setAnimation('');
        }
    }, [pathname]);

    return (
        <main>
            <div>
                <NavBar />
            </div>
            <div className={`transition-container ${animation}`}>
                {children}
            </div>
        </main>
    );
}
