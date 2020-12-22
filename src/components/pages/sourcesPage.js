import React, { useState, useCallback } from 'react';

import { Link } from 'react-router-dom';

import styles from './pages.module.css';

const SourcesPage = ({ sources, setListSources }) => {

    const [ value, setValue ] = useState('');
    const [ allSources, setAllSources ] = useState(sources);

    const getRandomId = useCallback(() => {
        return Math.random().toString();
    }, [])

    const setInputValue = useCallback((el) => {
        setValue(el.value);
    }, [])

    const setListSoutces = useCallback((e) => {
        e.preventDefault();
        allSources.push(value);
        setAllSources(allSources);
        setListSources(allSources);
        setValue('');
    }, [allSources, setAllSources, setListSources, value])

    const listItem = allSources.map((el) => {
        return (
            <li className={styles.sourcesPageItem} key={getRandomId()}>
                {el}
            </li>
        )
    })

    return (
        <React.Fragment>
            <h2 className={styles.sourcesPageHeader}>Expense sources</h2>
            <ul className={styles.sourcesPageList}>
                {listItem}
            </ul>
            <form>
                <input 
                    type="text"
                    name="expense"
                    placeholder="Expense"
                    value={value}
                    onChange={(e) => setInputValue(e.target)}
                />
                <button onClick={(e) => setListSoutces(e)}>Add expense</button>
            </form>
            <Link to="/home">Expenses page</Link>
        </React.Fragment>
    )
}

export default SourcesPage;