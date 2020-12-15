import React, {
    useState,
    useEffect
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

    const createNewExpense = (item, num) => {
        return {
            [item]: num
        }
    }

    const addItem = (newValue, newType) => {
        const newItem = createNewExpense(newType, newValue);

        if (typeof(allData) === 'object') {
            const dataArr = Array.from(allData);
            let checkArr = [];

            let filtData = dataArr.map((item) => {

                if(item[newType]) {
                    let sumValues = +item[newType] + +newValue;
                    checkArr.push(true);
                    return (
                        {
                            [newType]: sumValues
                        }
                    )
                } else {
                    checkArr.push(false);
                    return item;
                }
            })

            if(checkArr.includes(true)) {
                return setAllData(filtData);
            } else {
                allData.push(newItem);
                return setAllData(allData);
            }

        } else {
            return setAllData([newItem]);
        }
    }

    const calcSumToday = (newValue) => {
        const newSumToday = + newValue + sumToday;
        setSumToday(newSumToday);
    }

    const calcSumFull = (newValue) => {
        const newSumFull = + newValue + sumFull;
        setSumFull(newSumFull);
    }

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
