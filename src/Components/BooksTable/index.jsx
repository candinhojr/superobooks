import React, { useState } from 'react'
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
import ModalDetails from '../Modal'
import ApiService from '../../Service/ApiService'
import Loading from '../Loading'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.info.light,
    color: '#3b3934',
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

const CellBooks = ({ cellkey, data, column, details }) => {
  switch (column.id) {
    case 'titulo':
      return (
        <TableCell key={cellkey}>
          <Typography variant="body2">{data[column.id]}</Typography>
          <Typography variant="body2">({data.isbn})</Typography>
        </TableCell>
      )

    case 'acao':
      return (
        <TableCell align="center">
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              details(data.id)
            }}
          >
            Detalhes
          </Link>
        </TableCell>
      )

    default:
      return (
        <TableCell key={cellkey} align={column.align}>
          <Typography variant="body2">{data[column.id]}</Typography>
        </TableCell>
      )
  }
}

const BooksTable = ({ columns, data, loadingBooks }) => {
  const classes = useStyles()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [book, setBook] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const details = id => {
    setIsLoading(true)
    setShowModal(true)
    ApiService.ListBook(id)
      .then(res => {
        setBook(res)
        setIsLoading(false)
      })
      .catch(error => {
        setIsLoading(false)
        console.log(`Erro na comunicação com a API ao tentar listar o livro - log(${error})`)
      })
  }

  return (
    <div>
      {loadingBooks && <Loading />}
      {!loadingBooks && (
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <StyledTableRow>
                {columns.map(column => (
                  <StyledTableCell key={column.id} align={column.align}>
                    {column.label}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data).map(
                bookToRender => (
                  <StyledTableRow key={bookToRender.id}>
                    {columns.map(column => (
                      <CellBooks key={column.id} data={bookToRender} column={column} details={details} />
                    ))}
                  </StyledTableRow>
                )
              )}

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
          <ModalDetails
            open={showModal}
            onClose={() => {
              setShowModal(false)
              setBook(null)
            }}
            maxWidth={'sm'}
            loading={isLoading}
            name={'Modal Detalhes'}
            title={'Detalhes do Livro'}
            book={book}
            hasButton
          />
        </TableContainer>
      )}
    </div>
  )
}

export default BooksTable
