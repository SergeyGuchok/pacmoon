import Image from "next/image";
import styles from "./page.module.css";

import { Header } from '@/components/Header'

export default function Home() {
  return (
    <main className={styles.root}>
        <Header />
        <div>123</div>
    </main>
  );
}
