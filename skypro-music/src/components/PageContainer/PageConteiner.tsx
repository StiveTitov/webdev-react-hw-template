import styles from './PageContainer.module.css'
type PageConteinerType = { children: React.ReactNode }
export default function PageConteiner({ children }: PageConteinerType) {
    return (
        <div className={styles.container}>{children}</div>
    );
}

