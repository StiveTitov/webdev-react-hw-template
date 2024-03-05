
import classNames from 'classnames';
import styles from './Filter.module.css'
type FilterType = {
    list: Array<{ id: number, name: string }>;
    title: string;
    isOpen: boolean;
    onClick: () => void;
};


export default function Filter({ list, title, isOpen, onClick }: FilterType) {
    return (
        <>
            <div className={classNames(styles.filter__button, styles._btnText)} onClick={onClick}>{title}</div>
            {isOpen && (<ul>
                
                {list.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>)}
        </>
    );
}