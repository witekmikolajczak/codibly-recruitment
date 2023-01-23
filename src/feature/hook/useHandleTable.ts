import { useState, useEffect } from 'react';
import { useGetApiDataQuery } from '../redux/api/apiData';
import { emptyData } from '../../util/emptyData';

export const useHandleTable = () => {
  const [apiData, setApiData] = useState<ApiDataInterface>(emptyData);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<keyof RowInterface>('id');
  const { data, isError, isSuccess, isLoading } = useGetApiDataQuery(
    page.toString()
  );

  useEffect(() => {
    if (data) {
      setApiData(data);
    }
  }, [data, isError, isSuccess, isLoading]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof RowInterface
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const createSortHandler =
    (property: keyof RowInterface) =>
    (event: React.MouseEvent<unknown>) => {
      handleRequestSort(event, property);
    };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return {
    rowsPerPage,
    apiData,
    page,
    orderBy,
    createSortHandler,
    handleChangePage,
    handleChangeRowsPerPage,
    order,
    isError,
    isSuccess,
    isLoading,
  };
};
