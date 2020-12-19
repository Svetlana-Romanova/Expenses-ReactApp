import React, {
    useState,
    useCallback
} from 'react'

import Header from '../header';
import ExpensesToday from '../expensesToday';
import AddExpenses from '../addExpenses';
import Footer from '../footer';

const Main = ( { sources } ) => {

    const [ allData, setAllData] = useState(0);
    const [ sumToday, setSumToday ] = useState(0);
    const [ sumFull, setSumFull ] = useState(0);
    const [ sumFullData, setSumFullData ] = useState(0);

    const createNewExpense = (item, num) => {
        return (
                {
                    [item]: [num]
                }
            )
        };

    const pushValues = (state, setState, newValue, newType) => {
        const newItem = createNewExpense(newType, newValue);

        if (typeof(state) === 'object') {
            if (newType in state) {
                state[newType].push(newValue);
            } else {
                state[newType] = [newValue]
            }

            return setState(state); 
        } else {
            return setState(newItem);
        }
    }

    const addItem = useCallback((newValue, newType) => {
        pushValues(allData, setAllData, newValue, newType);
    }, [allData, setAllData])
    
    const addItemFull = useCallback((newValue, newType) => {
        pushValues(sumFullData, setSumFullData, newValue, newType);
    }, [sumFullData, setSumFullData])

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
            <Header sumFull={sumFull} sumFullData={sumFullData} />
            <ExpensesToday dataList={allData} sumToday={sumToday} />
            <AddExpenses sources={sources} addItem={addItem} addItemFull={addItemFull} calcSumFull={calcSumFull} calcSumToday={calcSumToday} />
            <Footer cleanToday={cleanToday} />
        </React.Fragment>
    )
}

export default Main;
