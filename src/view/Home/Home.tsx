import React from 'react'
import styles from './Home.module.scss'

import { 
  CustomTable,
  CustomModal 
} from '../../component'
import { Input } from '@mui/material';


export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["input-container"]}>
        <Input placeholder='Id'/>
      </div>
      <div className={styles["table-container"]}>
        <CustomTable/>
      </div>
      <CustomModal/>
    </div>
  )
}
