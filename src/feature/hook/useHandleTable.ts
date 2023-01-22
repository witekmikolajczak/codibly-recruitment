import { useState, useEffect } from "react";

function createData(id:number, name: string, calories: number, fat: number) {
   return { id, name, calories, fat };
 }
 
 const rows = [
   createData(1,'Cupcake', 305, 3.7),
   createData(2,'Donut', 452, 25.0),
   createData(3,'Eclair', 262, 16.0),
   createData(4,'Frozen yoghurt', 159, 6.0),
   createData(5,'Gingerbread', 356, 16.0),
   createData(6,'Honeycomb', 408, 3.2),
   createData(7,'Ice cream sandwich', 237, 9.0),
   createData(8,'Jelly Bean', 375, 0.0),
   createData(9,'KitKat', 518, 26.0),
   createData(0,'Lollipop', 392, 0.2),
   createData(10,'Marshmallow', 318, 0),
   createData(11,'Nougat', 360, 19.0),
   createData(12,'Oreo', 437, 18.0),
 ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export const useHandleTable = () => {
   const [initialData, setInitialData] = useState<RowInterface[]>(rows)
   const [page, setPage] = useState(0);
   const [rowsPerPage, setRowsPerPage] = useState(5);
   const [order, setOrder] = useState<'asc' | 'desc'>('asc');
   const [orderBy, setOrderBy] = useState<keyof RowInterface>('id');
 
   useEffect(()=>{
     setInitialData(rows)
   }, [rows])
   
   const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof RowInterface) => {
     const isAsc = orderBy === property && order === 'asc';
     setOrder(isAsc ? 'desc' : 'asc');
     setOrderBy(property);
     setInitialData(initialData.sort((a, b) => (a.id < b.id ? -1 : 1)))
   };
     
   const createSortHandler = (property: keyof RowInterface) => (event: React.MouseEvent<unknown>) => {
     handleRequestSort(event, property);
   };
   
 
   // Avoid a layout jump when reaching the last page with empty rows.
   const emptyRows =
     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
 
   const handleChangePage = (
     event: React.MouseEvent<HTMLButtonElement> | null,
     newPage: number,
   ) => {
     setPage(newPage);
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
      rows,
      handleChangePage,
      handleChangeRowsPerPage,
      order
   }
}
