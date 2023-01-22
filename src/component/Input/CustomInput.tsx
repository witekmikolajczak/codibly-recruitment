import React, { useState } from 'react';
import { Input } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../feature/redux/hook';
import { loadApiDataCollection } from '../../feature/redux/reducer/apiData';
export const  CustomInput=()=> {
   const state = useAppSelector((state)=>state.apiData)
   const dispatch = useAppDispatch()
   const [id, setId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {    
    if (!isNaN(Number(e.currentTarget.value))) {
      const filteredData =  state.data.filter((value)=> value.id.toString()===id)
      dispatch(loadApiDataCollection({...state, data:filteredData}))
      setId(e.currentTarget.value);
    }
  }

  return (
      <Input
        type="text"
        placeholder="Filter by id"
        value={id}
        onChange={(e)=>handleChange(e)}
      />
  );
}

export default CustomInput;
