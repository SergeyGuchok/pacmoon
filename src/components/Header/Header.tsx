'use client'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Header.module.css'

import { CurrentActor } from "@/components/CurrentActor";

export function Header () {

    return (
        <div className={styles.root}>
            <div className={styles.logo}>
                <Image src="/logo.webp" alt="logo" width="50" height="50" />
                <p>PACBOARD</p>
            </div>
            <nav className={styles.nav}>
                <Link href="/feed">
                    <p>Feed</p>
                </Link>
                <Link href="/leaderboard">
                    <p>Leaderboard</p>
                </Link>
            </nav>

            <CurrentActor />
        </div>
    )
}