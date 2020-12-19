import React, { useCallback } from 'react';

import styles from './renderItemsList.module.css';

const RenderItemsLists = ({ dataList }) => {

    const getRandomId = useCallback(() => {
        return Math.random().toString();
    }, [])

    const list = useCallback((data) => {
        let content = [];
        for (let key in data) {
            let sumItem = data[key].reduce((sum, current) => sum + current, 0);
            content.push(
                <li className={styles.expensesItem} key={getRandomId()}>
                    <span value={key} className={styles.expensesItemName}>{key}</span>
                    <span>{sumItem}</span>
                </li>
            )
        }
        return content;
    }, [getRandomId])


    return list(dataList);

}

export default RenderItemsLists;