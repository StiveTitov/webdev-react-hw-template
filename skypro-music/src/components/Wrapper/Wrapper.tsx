import styles from './Wrapper.module.css';

type WrapperType = {children: React.ReactNode}
export default function Wrapper({ children }:WrapperType) {
    return (
        <div className={styles.wrapper}>{children}</div>
    );
}