import React from 'react';
import RenderItemsLists from '../renderItemsList';

import styles from './header.module.css'

const Header = ({ sumFull, sumFullData }) => {

    return (
        <React.Fragment>
            <h2 className={styles.header}>Total expenses: {sumFull}</h2>
            <ul className={styles.headerList}>
                <RenderItemsLists dataList={sumFullData} />
            </ul>
        </React.Fragment>
    )
}

export default Header;
