import React from 'react'
import styles from './Home.module.scss'

import { 
  CustomTable,
  CustomModal,
  CustomError
} from '../../component'
import { Input } from '@mui/material';
import { useFetchData } from '../../feature/hook/useFetchData';


export const Home = () => {
  const {
    isError,
    isSuccess,
    isLoading,
  } = useFetchData()
  
  return (
    <div className={styles.wrapper}>
      <div className={styles["input-container"]}>
        <Input placeholder='Id'/>
      </div>
      <div className={styles["table-container"]}>
        <CustomTable
          isError={isError}
          isLoading={isLoading}
          isSuccess={isSuccess}
          fnHandleTableRowClick={()=>{}}/>
      </div>
      <CustomModal/>
    </div>
  )
}
