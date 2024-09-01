'use client';

import React, { useEffect, useState } from 'react';
import styles from './header-account.module.css'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useUser } from '@/src/contexts/user-context';
import FeedIcon from '@/src/icons/feed-icon';
import StatisticsIcon from '@/src/icons/statistics-icon';
import AddIcon from '@/src/icons/add-icon';
import LogoutIcon from '@/src/icons/logout-icon';
import useMedia from '@/src/hooks/use-media';
import { logout } from '@/src/actions/logout';

function getTitle(pathname: string) {
  switch (pathname) {
    case '/account/post':
      return 'Poste Sua Foto';
    case '/account/statistics':
      return 'Estatísticas';
    default:
      return 'Minha Conta';
  }
}

export function HeaderAccount() {
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const data = useUser();
  async function handleLogout() {
    await logout()
    data?.setUser(null)
  }

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Link href="/account" className={pathname === '/account' ? 'active' : ''}>
          <FeedIcon />
          {mobile && 'Minhas Fotos'}
        </Link>
        <Link
          href="/account/statistics"
          className={pathname === '/account/statistics' ? 'active' : ''}
        >
          <StatisticsIcon />
          {mobile && 'Estatísticas'}
        </Link>
        <Link
          href="/account/post"
          className={pathname === '/account/post' ? 'active' : ''}
        >
          <AddIcon />
          {mobile && 'Poste sua foto'}
          
        </Link>
        <button onClick={handleLogout}>
          <LogoutIcon />
          {mobile && 'Sair'}
        </button>
      </nav>
    </header>
  );
}