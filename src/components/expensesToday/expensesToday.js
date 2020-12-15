import React from 'react'

import styles from './expensesToday.module.css';

const ExpensesToday = ({ dataList, sumToday }) => {

    const list = (data) => {
        let content = [];
        for (let key in data) {
            content.push(
                <li className={styles.expensesItem}>
                    <span value={key} className={styles.expensesItemName}>{key}</span>
                    <span>{data[key]}</span>
                </li>
            )
        }
        return content;
    }

    return (
        <div className={styles.expensesToday}>
            <h2>Expenses today: {sumToday}</h2>
            <ul className={styles.expensesList}>
                {list(dataList)}
            </ul>
        </div>
    )
}

export default ExpensesToday;