import React from 'react';
import { Link } from 'react-router-dom';

import styles from './footer.module.css';

const Footer = ({ cleanToday }) => {

    return (
        <div className={styles.footer}>
            <Link to="/sources">Expense sources</Link>
            <button className={styles.checkout} onClick={() => cleanToday()}>Checkout</button>
        </div>
    )
}

export default Footer;
