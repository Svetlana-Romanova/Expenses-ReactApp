import React, {
    useState,
    useCallback
} from 'react'

import styles from './addExpenses.module.css';

const AddExpenses = ({ sources, addItem, calcSumFull, calcSumToday, addItemFull }) => {

    const [ value, setValue ] = useState('');
    const [ typeExpense, setTypeExpense ] = useState('');

    const pushValue = useCallback((el) => {
        setValue(+el.value);
    }, [])

    const pushTypeExpense = useCallback((e) => {
        setTypeExpense(e.currentTarget.value);
    }, [])

    const changeValue = useCallback((e) => {
        e.preventDefault();
        if (value > 0 && typeExpense !== '') {
            addItem(value, typeExpense);
            addItemFull(value, typeExpense);
            calcSumFull(value);
            calcSumToday(value);
        }
        setValue('');
        setTypeExpense('');
    }, [addItem, addItemFull, calcSumFull, calcSumToday, typeExpense, value]);

    const getRandomId = useCallback(() => {
        return Math.random().toString();
    }, [])

    const listItems = sources.map((el) => {
        return (
            <option value={el} key={getRandomId()}>{el}</option>
        )
    })

    return (
        <div className={styles.addExpenses}>
            <h3>Add expense</h3>
            <form className={styles.formAddExpenses}>
                <input 
                    type="number"
                    name="expense"
                    className={styles.form}
                    placeholder="Expense"
                    value={value}
                    onChange={(e) => pushValue(e.target)}
                />
                <select 
                    className={styles.selectExpenses}
                    onChange={(e) => pushTypeExpense(e)}
                    value={typeExpense} >
                        <option value="">Select expense sourse...</option>
                        {listItems}
                </select>
                <button 
                    className={styles.buttonAdd} 
                    onClick={(e) => changeValue(e)}
                >
                    Add expense
                </button>
            </form>
        </div>
    )
}

export default AddExpenses;