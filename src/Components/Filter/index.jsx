import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { KeyboardDatePicker } from '@material-ui/pickers'
import { getYear } from 'date-fns'
import * as _ from 'lodash'
import PropTypes from 'prop-types'

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
  const [ano, setAno] = useState({
    AnoInicial: null,
    AnoFinal: null
  })
  const { handleParams, totalCount } = props

  const handleDatePicker = (date, name) => {
    if (!_.isNil(date)) {
      setAno({
        ...ano,
        [name]: date
      })
      handleParams(name, getYear(date))
    } else {
      setAno({
        ...ano,
        [name]: null
      })
      handleParams(name, null)
    }
  }

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
          value={ano.AnoInicial}
          onChange={date => handleDatePicker(date, 'AnoInicial')}
        />
        <KeyboardDatePicker
          autoOk
          color={'secondary'}
          variant="inline"
          views={['year']}
          label="Ano final"
          format="yyyy"
          value={ano.AnoFinal}
          onChange={date => handleDatePicker(date, 'AnoFinal')}
        />
        <Typography variant="subtitle1">{totalCount} resultados encontrados </Typography>
      </Toolbar>
    </AppBar>
  )
}

Filter.propTypes = {
  totalCount: PropTypes.number.isRequired,
  handleParams: PropTypes.func.isRequired
}

export default Filter
