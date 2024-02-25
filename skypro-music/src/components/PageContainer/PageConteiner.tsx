import styles from './PageContainer.module.css'
export default function PageConteiner({ children }) {
    return (
        <div className={styles.container}>{children}</div>
    );
}

