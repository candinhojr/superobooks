import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Search from '../Search'
import Filter from '../Filter'

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
  }
}))

const Header = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h1" className={classes.title}>
            Supero
          </Typography>
          {window.location.pathname === '/' && <Search {...props} />}
        </Toolbar>
      </AppBar>
      {window.location.pathname === '/' && <Filter {...props} />}
    </div>
  )
}

export default Header
