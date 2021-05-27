import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card
} from '@material-ui/core';

const TableUI = ({cars}) => {
  return (
    <TableContainer component={Card}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Fuel</TableCell>
            <TableCell align="right">Body type</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            cars.map(car => (
              <TableRow key={car.model}>
                <TableCell align="right">{car.brand}</TableCell>
                <TableCell align="right">{car.model}</TableCell>
                <TableCell align="right">{car.year}</TableCell>
                <TableCell align="right">{car.fuel}</TableCell>
                <TableCell align="right">{car.bodyType}</TableCell>
                <TableCell align="right">{car.price}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableUI;
