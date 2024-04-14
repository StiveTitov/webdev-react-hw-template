import styles from "./CenterBlockHeader.module.css"

type TypeText = { text: string };
export default function CenterBlockHeader({text}: TypeText) {
    return(
<h2 className={styles.centerblock__h2}>{text}</h2>
    );
}