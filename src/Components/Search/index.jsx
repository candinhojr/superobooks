import React, { useEffect, useState } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'
import superoTheme from '../../Utils/SuperoTheme'

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3)
    }
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    width: '100%',
    height: '1.6em'
  }
}))

const Search = props => {
  const classes = useStyles()
  const [input, setInput] = useState('')
  const { handleParams, getBooks } = props

  useEffect(() => {
    handleParams('Busca', input)
  }, [input])

  return (
    <>
      <div className={classes.search}>
        <TextField
          value={input}
          placeholder="Busque livros pelo título, autor ou ISBN"
          fullWidth={true}
          classes={{
            root: classes.inputInput
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={event => setInput(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </div>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        disableElevation
        onClick={async () => {
          await getBooks()
          setInput('')
        }}
      >
        Buscar
      </Button>
    </>
  )
}

export default Search
