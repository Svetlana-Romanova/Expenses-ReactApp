import React, {
    useState,
    useEffect,
    useCallback
} from 'react'

import Header from '../header';
import ExpensesToday from '../expensesToday';
import AddExpenses from '../addExpenses';
import Footer from '../footer';

const Main = ( { sources } ) => {

    const [ allData, setAllData] = useState(0);
    const [ saveData, addSaveData ] = useState(0);
    const [ sumToday, setSumToday ] = useState(0);
    const [ sumFull, setSumFull ] = useState(0);

    useEffect(() => {
        if(allData) {
            addSaveData(allData);
        }
    }, [allData]);

    const createNewExpense = useCallback((item, num) => {
        return {
            [item]: num
        }
    }, [])

    const addItem = useCallback((newValue, newType) => {
        const newItem = createNewExpense(newType, newValue);

        if (typeof(allData) === 'object') {

            if (newType in allData) {
                const thisValue = allData[newType];
                allData[newType] = thisValue + newValue;
            } else {
                allData[newType] = newValue
            }

            return setAllData(allData); 
        } else {
            return setAllData(newItem);
        }
    }, [allData, setAllData, createNewExpense])

    const calcSumToday = useCallback((newValue) => {
        const newSumToday = + newValue + sumToday;
        setSumToday(newSumToday);
    }, [sumToday])

    const calcSumFull = useCallback((newValue) => {
        const newSumFull = + newValue + sumFull;
        setSumFull(newSumFull);
    }, [sumFull])

    const cleanToday = () => {
        setSumToday(0);
        setAllData(0);
    }

    return (
        <React.Fragment>
            <Header dataList={saveData} sumFull={sumFull} />
            <ExpensesToday dataList={allData} sumToday={sumToday} />
            <AddExpenses sources={sources} addItem={addItem} calcSumFull={calcSumFull} calcSumToday={calcSumToday} />
            <Footer cleanToday={cleanToday} />
        </React.Fragment>
    )
}

export default Main;
