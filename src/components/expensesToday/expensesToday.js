import React from 'react'
import RenderItemsLists from '../renderItemsList';

import styles from './expensesToday.module.css';

const ExpensesToday = ({ dataList, sumToday }) => {

    return (
        <div className={styles.expensesToday}>
            <h2>Expenses today: {sumToday}</h2>
            <ul className={styles.expensesList}>
                <RenderItemsLists dataList={dataList} />
            </ul>
        </div>
    )
}

export default ExpensesToday;