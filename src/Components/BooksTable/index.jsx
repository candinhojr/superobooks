import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
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
import TableSortLabel from '@material-ui/core/TableSortLabel'

import * as _ from 'lodash'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#f99b3c',
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

const BooksTable = ({ data, loadingBooks, totalCount, skipCount, sort, handleParams, getBooks }) => {
  const [page, setPage] = useState(0)
  const [order, setOrder] = useState('desc')
  const [column, setColumn] = useState(sort)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [book, setBook] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const columns = [
    { id: 'titulo', label: 'Livro' },
    { id: 'autor', label: 'Autor' },
    { id: 'editora', label: 'Editora' },
    { id: 'ano', label: 'Ano', align: 'right' }
  ]

  const handleChangePage = (event, newPage) => {
    if (newPage > page) {
      handleParams('SkipCount', newPage * rowsPerPage - 1)
    }

    if (newPage < page) {
      const skip = skipCount - 10
      if (skip < 0) {
        handleParams('SkipCount', 0)
      } else {
        handleParams('SkipCount', skip)
      }
    }

    setPage(newPage)
    getBooks()
  }

  const handleChangeRowsPerPage = event => {
    setPage(0)
    setRowsPerPage(parseInt(event.target.value))
    handleParams('SkipCount', 0)
    handleParams('MaxResultCount', event.target.value)
    getBooks()
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

  const handleSortColumn = id => {
    setColumn(id)
    handleParams('Sorting', id)
    setPage(0)
    handleParams('SkipCount', 0)
    getBooks()
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '4vh'
      }}
    >
      {loadingBooks && <Loading />}
      {!loadingBooks && (
        <TableContainer
          component={Paper}
          style={{
            width: '80%'
          }}
        >
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <StyledTableRow>
                {_.map(columns, cell => (
                  <StyledTableCell key={cell.id} sortDirection={order}>
                    <TableSortLabel
                      active={column === cell.id}
                      direction={order}
                      onClick={() => handleSortColumn(cell.id)}
                    >
                      {cell.label}
                    </TableSortLabel>
                  </StyledTableCell>
                ))}
                <StyledTableCell key={'ação'}>Ação</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {_.map(data, bookToRender => (
                <StyledTableRow key={Math.random()}>
                  {_.map([...columns, { id: 'acao', label: 'Ação' }], (column, index) => (
                    <CellBooks key={index} data={bookToRender} column={column} details={details} />
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
            <TableFooter>
              <StyledTableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 30, 50]}
                  colSpan={5}
                  count={totalCount}
                  page={page}
                  labelRowsPerPage="Linhas por página"
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true
                  }}
                  onChangePage={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  labelDisplayedRows={({ from, to, count }) => `${from}-${to === -1 ? count : to}  de  ${count}`}
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
