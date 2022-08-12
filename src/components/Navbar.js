import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = ({LogoutHandler}) => {
  return (
    <div className={styles.container}>
        <div>
            <h2 className={styles.nameproject}>Hello Messenger</h2>
        </div>
        <div>
            <button onClick={LogoutHandler}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar;