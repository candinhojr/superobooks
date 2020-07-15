import React, { useState } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import orange from '@material-ui/core/colors/orange'

import superoTheme from '../../Utils/SuperoTheme'
import Search from '../Search'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    textTransform: 'uppercase',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  appBar: {
    backgroundColor: superoTheme.palette.primary.main,
    color: superoTheme.palette.secondary.main
  },
  filter: {
    backgroundColor: orange[300],
    color: superoTheme.palette.secondary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'inherit',
    flex: 1
  },
  inputRoot: {
    color: 'inherit',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    }
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '1.6em'
  }
}))

const SearchHeader = props => {
  const { bookSearchOnChange, totalCount } = props
  const classes = useStyles()

  const [selectedInitialYear, handleInitialYearChange] = useState(new Date())
  const [selectedFinalYear, handleFinalYearChange] = useState(new Date())

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h3" className={classes.title}>
              Supero
            </Typography>
            <Search
              bookSearchOnChange={bookSearchOnChange}
              selectedInitialYear={selectedInitialYear.getFullYear()}
              selectedFinalYear={selectedFinalYear.getFullYear()}
            />
          </Toolbar>
        </AppBar>
        <AppBar position="static" className={classes.filter}>
          <Toolbar className={classes.filter}>
            <Typography variant="subtitle1">Filtrar por ano de publicação:</Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                variant="inline"
                views={['year']}
                label="Ano inicial"
                format="yyyy"
                value={selectedInitialYear}
                onChange={date => date && handleInitialYearChange(date)}
              />
              <KeyboardDatePicker
                variant="inline"
                views={['year']}
                label="Ano final"
                format="yyyy"
                value={selectedFinalYear}
                onChange={date => date && handleFinalYearChange(date)}
              />
            </MuiPickersUtilsProvider>
            <Typography variant="subtitle1">{totalCount} resultados encontrados </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </>
  )
}

export default SearchHeader
