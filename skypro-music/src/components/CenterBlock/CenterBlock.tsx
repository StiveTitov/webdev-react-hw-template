'use client'

import styles from './CenterBlock.module.css'








type CenterBlockType = {children: React.ReactNode}

export default function CenterBlock({ children }:CenterBlockType) {

    

    return (
        <div className={styles.mainCenterblock}>
            {children}
        </div>
    );
}