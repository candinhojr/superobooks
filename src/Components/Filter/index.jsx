import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { KeyboardDatePicker } from '@material-ui/pickers'
import { getYear } from 'date-fns'

const useStyles = makeStyles(theme => ({
  filter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'inherit',
    flex: 1
  }
}))

const Filter = props => {
  const classes = useStyles()
  const [anoInicial, setAnoInicial] = useState(null)
  const [anoFinal, setAnoFinal] = useState(null)
  const { params, handleParams, totalCount, getBooks } = props

  return (
    <AppBar position="static" className={classes.filter}>
      <Toolbar className={classes.filter}>
        <Typography variant="subtitle1">Filtrar por ano de publicação:</Typography>
        <KeyboardDatePicker
          autoOk
          color={'secondary'}
          variant="inline"
          views={['year']}
          label="Ano inicial"
          format="yyyy"
          value={anoInicial}
          onChange={date => {
            setAnoInicial(date)
            handleParams('AnoInicial', getYear(date))
          }}
        />
        <KeyboardDatePicker
          autoOk
          color={'secondary'}
          variant="inline"
          views={['year']}
          label="Ano final"
          format="yyyy"
          value={anoFinal}
          onChange={date => {
            setAnoFinal(date)
            handleParams('AnoFinal', getYear(date))
          }}
        />
        <Typography variant="subtitle1">{totalCount} resultados encontrados </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Filter
