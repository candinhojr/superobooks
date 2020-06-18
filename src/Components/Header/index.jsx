import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
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
  }
}))

const Header = props => {
  const classes = useStyles()

  const { bookSearchOnChange, inputSearchValue, totalCount } = props

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            Supero
          </Typography>
          <Search bookSearchOnChange={bookSearchOnChange} inputSearchValue={inputSearchValue} />
        </Toolbar>
      </AppBar>
      <AppBar position="static" className={classes.filter}>
        <Toolbar className={classes.filter}>
          <Typography variant="subtitle1">Filtrar por ano de publicação:</Typography>
          <Typography variant="subtitle1">{totalCount} resultados encontrados </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
