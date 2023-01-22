import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { loadPageNumber } from "../redux/reducer/tablePage";

export const useHandleTable = () => {
  const dispatch = useAppDispatch()
  const apiData = useAppSelector((state)=>state.apiData)
  
   const [initialData, setInitialData] = useState<ApiDataInterface>(apiData)
   const [page, setPage] = useState(0);
   const [rowsPerPage, setRowsPerPage] = useState(5);
   const [order, setOrder] = useState<'asc' | 'desc'>('asc');
   const [orderBy, setOrderBy] = useState<keyof RowInterface>('id');
 
   useEffect(()=>{
     setInitialData(apiData)
   }, [apiData])
   
   const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof RowInterface) => {
     const isAsc = orderBy === property && order === 'asc';
     setOrder(isAsc ? 'desc' : 'asc');
     setOrderBy(property);
     setInitialData((initialData)=>{
      initialData.data.sort((a, b) => (a.id < b.id ? -1 : 1));
      return initialData
     })
   };
     
   const createSortHandler = (property: keyof RowInterface) => (event: React.MouseEvent<unknown>) => {
     handleRequestSort(event, property);
   };
   
   // Avoid a layout jump when reaching the last page with empty rows.
   const emptyRows =
     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - apiData.data.length) : 0;
 
   const handleChangePage = (
     event: React.MouseEvent<HTMLButtonElement> | null,
     newPage: number,
   ) => {
     setPage(newPage);
     dispatch(loadPageNumber(newPage.toString()))
   };
 
   const handleChangeRowsPerPage = (
     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
   ) => {    
     setRowsPerPage(parseInt(event.target.value, 10));
     setPage(0);
   }; 

   return {
      rowsPerPage,
      initialData,
      page,
      emptyRows,
      orderBy,
      createSortHandler,
      handleChangePage,
      handleChangeRowsPerPage,
      order
   }
}
