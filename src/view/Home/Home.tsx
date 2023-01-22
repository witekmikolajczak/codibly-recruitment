import React from 'react'
import styles from './Home.module.scss'

import { 
  CustomTable,
  CustomModal,
  CustomInput
} from '../../component'

import { useFetchData } from '../../feature/hook/useFetchData';
import { useAppDispatch, useAppSelector } from '../../feature/redux/hook';
import { closeCurrentApiData } from '../../feature/redux/reducer/currentApiData';


export const Home = () => {
  const dispatch = useAppDispatch()
  const test = useAppSelector((state)=>state.apiData)
  const currentApiData = useAppSelector((state)=>state.currentApiData)
  const {
    isError,
    isSuccess,
    isLoading,
  } = useFetchData()
  console.log(test);
  
  return (
    <div className={styles.wrapper}>
      <div className={styles["input-container"]}>
        <CustomInput/>
      </div>
      <div className={styles["table-container"]}>
        <CustomTable
          isError={isError}
          isLoading={isLoading}
          isSuccess={isSuccess}
          fnHandleTableRowClick={()=>{}}/>
      </div>
      <CustomModal isOpen={currentApiData.isOpen!} handleClose={()=>dispatch(closeCurrentApiData())} data={currentApiData}/>
    </div>
  )
}
