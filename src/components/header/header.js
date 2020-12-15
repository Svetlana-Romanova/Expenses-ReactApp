import React from 'react'

import styles from './header.module.css'

const Header = ({ dataList, sumFull }) => {

    const list = (data) => {
        let content = [];
        for (let key in data) {
            content.push(
                <li className={styles.headerItem}>
                    <span value={key} className={styles.headerItemName}>{key}</span>
                    <span>{data[key]}</span>
                </li>
            )
        }
        return content;
    }

    return (
        <React.Fragment>
            <h2 className={styles.header}>Total expenses: {sumFull}</h2>
            <ul className={styles.headerList}>
                {list(dataList)}
            </ul>
        </React.Fragment>
    )
}

export default Header;
