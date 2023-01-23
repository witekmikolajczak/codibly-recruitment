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
  PaginationAction,
} from '../index';
import { useAppDispatch } from '../../feature/redux/hook';
import { loadCurrentApiData } from '../../feature/redux/reducer/currentApiData';

interface CustomTableInterface {
  fnHandleTableRowClick: (apiData: DataInterface) => void;
}
export const CustomTable = ({
  fnHandleTableRowClick,
}: CustomTableInterface) => {
  const dispatch = useAppDispatch();
  const {
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
  } = useHandleTable();

  return (
    <TableContainer component={Paper}>
      {isSuccess && (
        <Table
          sx={{ minWidth: 500 }}
          aria-label="custom pagination table"
        >
          <TableBody>
            {apiData.data
              .slice(0, rowsPerPage)
              .map((apiData, index) => {
                return (
                  <TableRow
                    style={{ backgroundColor: apiData.color }}
                    onClick={() =>
                      dispatch(loadCurrentApiData(apiData))
                    }
                    key={index}
                  >
                    <TableCell component="th" scope="row">
                      {apiData.id.toString()}
                    </TableCell>
                    <TableCell component="th" scope="apiData">
                      {apiData.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {apiData.year}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'id'}
                  direction={order}
                  onClick={createSortHandler('id')}
                >
                  sort by id
                </TableSortLabel>
              </TableCell>
              <TablePagination
                rowsPerPageOptions={[
                  5,
                  10,
                  25,
                  { label: 'All', value: -1 },
                ]}
                colSpan={3}
                count={apiData.total}
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
      )}
      {isError && <CustomError />}
      {isLoading && <CustomLoading />}
    </TableContainer>
  );
};
