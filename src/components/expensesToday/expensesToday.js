import React from 'react'

import styles from './expensesToday.module.css';

const ExpensesToday = ({ dataList, sumToday }) => {

    const newArr = Array.from(dataList);

    const list = newArr.map((el) => {
        const itemLi = Object.entries(el)[0];
        
        return (
            <li className={styles.expensesItem}>
                <span value={itemLi[0]} className={styles.expensesItemName}>{itemLi[0]}</span>
                <span>{itemLi[1]}</span>
            </li>
        )
    })

    return (
        <div className={styles.expensesToday}>
            <h2>Expenses today: {sumToday}</h2>
            <ul className={styles.expensesList}>
                {list}
            </ul>
        </div>
    )
}


export default ExpensesToday;