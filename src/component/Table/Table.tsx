import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableSortLabel, TableHead } from '@mui/material';
import { useHandleTable } from '../../feature/hook/useHandleTable';
import { 
  CustomLoading, 
  CustomError,
  PaginationAction
} from '../index';

interface CustomTableInterface {
  fnHandleTableRowClick:(apiData: DataInterface) => void;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}
export const CustomTable = ({
  fnHandleTableRowClick,
  isError,
  isLoading,
  isSuccess
}: CustomTableInterface) => {
  const { 
    rowsPerPage,
    initialData,
    page,
    emptyRows,
    orderBy,
    createSortHandler,
    handleChangePage,
    handleChangeRowsPerPage,
    order
  } = useHandleTable()
  
  return (
    <TableContainer component={Paper}>
      {isSuccess &&       
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableBody>
            {(rowsPerPage > 0
              ? initialData.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : initialData.data
            ).map((initialData) => (
              <TableRow
                style={{backgroundColor: initialData.color }}
                onClick={()=>fnHandleTableRowClick(initialData)} 
                key={initialData.name}>
                  <TableCell component="th" scope="row">
                    {initialData.id.toString()}
                  </TableCell>
                  <TableCell component="th" scope="initialData">
                    {initialData.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {initialData.year}
                  </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'id'}
                  direction={order}
                  onClick={createSortHandler('id')}
                >sort by id</TableSortLabel>
              </TableCell>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={initialData.data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={PaginationAction}
              />
            </TableRow>
          </TableFooter>
        </Table>
      }
      {isError && <CustomError/>}
      {isLoading && <CustomLoading/>}

    </TableContainer>
  );
}