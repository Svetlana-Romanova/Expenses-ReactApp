import React, { useState } from 'react'

import { Main, SourcesPage } from '../pages'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import styles from './app.module.css'

const App = () => {

    const [ sources, setSources ] = useState(['Food', 'Animal']);

    const setListSources = (arr) => {
        setSources(arr)
    }

    return (

        <Router>
            <div className={styles.main}>
                <Switch>
                    <Route path="/home" exact render={() => <Main sources={sources} />} />
                    <Route path="/sources" exact render={() => <SourcesPage setListSources={setListSources} sources={sources} />} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        </Router>
    )
}


export default App;
