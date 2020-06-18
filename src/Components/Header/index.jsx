import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'

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
    backgroundColor: theme.palette.info.light,
    color: '#3b3934'
  },
  filter: {
    backgroundColor: theme.palette.info.light,
    color: '#3b3934',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'inherit',
    flex: 1
  },
  inputRoot: {
    color: 'inherit'
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

const Header = props => {
  const { bookSearchOnChange, inputSearchValue, totalCount } = props
  const classes = useStyles()

  const [selectedInitialYear, handleInitialYearChange] = useState('')
  const [selectedFinalYear, handleFinalYearChange] = useState('')

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
              inputSearchValue={inputSearchValue}
              selectedInitialYear={selectedInitialYear}
              selectedFinalYear={selectedFinalYear}
            />
          </Toolbar>
        </AppBar>
        <AppBar position="static" className={classes.filter}>
          <Toolbar className={classes.filter}>
            <Typography variant="subtitle1">Filtrar por ano de publicação:</Typography>
            <div>
              <InputBase
                placeholder="ano inicial"
                fullWidth={true}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={event => {
                  handleInitialYearChange(event.target.value)
                  console.log(selectedInitialYear)
                }}
              />
            </div>
            <div>
              <InputBase
                placeholder="ano final"
                fullWidth={true}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={event => {
                  handleFinalYearChange(event.target.value)
                  console.log(selectedFinalYear)
                }}
              />
            </div>
            <Typography variant="subtitle1">{totalCount} resultados encontrados </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </>
  )
}

export default Header
