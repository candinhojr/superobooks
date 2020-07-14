import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import superoTheme from '../../Utils/SuperoTheme'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: superoTheme.palette.primary.main,
    color: superoTheme.palette.secondary.main
  },
  title: {
    textTransform: 'uppercase',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  }
}))

const Header = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h3" className={classes.title}>
              Supero
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </>
  )
}

export default Header
