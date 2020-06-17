import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableFooter from '@material-ui/core/TableFooter'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    height: 50,
    fontWeight: 700
  }
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow)

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 700
  },
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}))

const CellBooks = ({ cellkey, data, column }) => {
  if (column.id === 'titulo') {
    return (
      <TableCell key={cellkey}>
        <Typography variant="body2">{data[column.id]}</Typography>
        <Typography variant="body2">({data.isbn})</Typography>
      </TableCell>
    )
  }

  if (column.id === 'ano') {
    return (
      <TableCell key={cellkey} align={column.align}>
        <Typography variant="body2">{data[column.id]}</Typography>
      </TableCell>
    )
  }

  return (
    <TableCell>
      <Typography variant="body2">{data[column.id]}</Typography>
    </TableCell>
  )
}

const CellDetails = ({ details, id }) => {
  if (!details) return null

  return (
    <TableCell align="center">
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          details(id)
        }}
      >
        Detalhes
      </Link>
    </TableCell>
  )
}

const TitleDetails = ({ details }) => {
  if (!details) return null

  return <StyledTableCell align="center">Ações</StyledTableCell>
}

export default function BooksTable(props) {
  const { columns, data, details } = props

  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <StyledTableRow>
            {columns.map(column => (
              <StyledTableCell key={column.id} align={column.align}>
                {column.label}
              </StyledTableCell>
            ))}
            <TitleDetails details={details} />
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data).map(data => (
            <StyledTableRow key={data.id}>
              {columns.map(column => (
                <CellBooks key={column.id} data={data} column={column} />
              ))}
              <CellDetails details={details} id={data.id} />
            </StyledTableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 10 }}>
              <TableCell colSpan={5}>
                {' '}
                <Typography variant="body2">Não foram encontrados registros</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <StyledTableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={5}
              count={data.length}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true
              }}
              onChangePage={handleChangePage}
              rowsPerPage={rowsPerPage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </StyledTableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}
