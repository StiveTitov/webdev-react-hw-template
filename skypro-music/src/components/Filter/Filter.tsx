
import classNames from 'classnames';
import styles from './Filter.module.css'
import { FilterMenu } from '../FilterMenu';
type FilterType = {
    list: Array<{ id: number, name: string }>;
    title: string;
    top: number;
    left: number;
    isOpen: boolean;
    onClick: () => void;
};


export default function Filter({ list, title, isOpen, onClick, top, left }: FilterType) {
    return (
        <>
            <div className={classNames(styles.filter__button, styles._btnText)} onClick={onClick}>{title}</div>
            {isOpen && (
                <FilterMenu top={top} left={left} list={list}/>
                 

                    
                 
                
            )}
        </>
    );
}