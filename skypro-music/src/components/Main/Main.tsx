import { ReactNode } from 'react';
import styles from './Main.module.css'
type MainType = { children: React.ReactNode }
export default function Main({ children }: MainType) {
    return (
        <main className={styles.main}>{children}</main>
    );
}
