import React from 'react'

import styles from './header.module.css'

const Header = ({ dataList, sumFull }) => {

    const newArr = Array.from(dataList);

    const list = newArr.map((el) => {
        const itemLi = Object.entries(el)[0];
        
        return (
            <li className={styles.headerItem}>
                <span value={itemLi[0]} className={styles.headerItemName}>{itemLi[0]}</span>
                <span>{itemLi[1]}</span>
            </li>
        )
    })

    return (
        <React.Fragment>
            <h2 className={styles.header}>Total expenses: {sumFull}</h2>
            <ul className={styles.headerList}>
                {list}
            </ul>
        </React.Fragment>
    )
}

export default Header;
