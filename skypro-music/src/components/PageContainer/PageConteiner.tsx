import styles from './PageContainer.module.css'
export function PageConteiner({ children }) {
    return (
        <div className={styles.container}>{children}</div>
    );
}

