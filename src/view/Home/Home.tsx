import React from 'react';
import styles from './Home.module.scss';

import {
  CustomTable,
  CustomModal,
  CustomInput,
} from '../../component';

import {
  useAppDispatch,
  useAppSelector,
} from '../../feature/redux/hook';
import { closeCurrentApiData } from '../../feature/redux/reducer/currentApiData';

export const Home = () => {
  const dispatch = useAppDispatch();
  const currentApiData = useAppSelector(
    (state) => state.currentApiData
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles['input-container']}>
        <CustomInput />
      </div>
      <div className={styles['table-container']}>
        <CustomTable fnHandleTableRowClick={() => {}} />
      </div>
      <CustomModal
        isOpen={currentApiData.isOpen!}
        handleClose={() => dispatch(closeCurrentApiData())}
        data={currentApiData}
      />
    </div>
  );
};
