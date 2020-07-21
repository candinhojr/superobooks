export default {
  palette: {
    // https://material-ui.com/customization/themes/#palette
    primary: {
      light: '#87CEFA',
      main: '#F99B3C',
      dark: '#191970',
      contrastText: '#fff'
    },
    secondary: {
      light: '#87CEFA',
      main: '#4682B4',
      dark: '#191970',
      contrastText: '#fff'
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'
    },
    success: {
      light: '#4DB848',
      main: '#4DB848',
      dark: '#4DB848',
      contrastText: '#fff'
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Lato',
      'Muli',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontWeight: 400,
      fontSize: 40,
      color: '#3B3934',
      lineHeight: 1.75
    },
    h2: {
      fontWeight: 400,
      fontSize: 22,
      lineHeight: 1.75
    },
    h3: {
      fontWeight: 400,
      fontSize: 18,
      color: '#3B3934',
      lineHeight: 1.75
    },
    h4: {
      fontWeight: 400,
      fontSize: 16,
      color: '#3B3934',
      lineHeight: 1.75
    },
    h5: {
      fontWeight: 400,
      fontSize: 14,
      color: '#3B3934',
      lineHeight: 1.75
    },
    h6: {
      fontWeight: 400,
      fontSize: 12,
      color: '#3B3934',
      lineHeight: 1.75
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 18,
      color: '#3B3934',
      lineHeight: 1.75
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: 16,
      color: '#3B3934',
      lineHeight: 1.75
    },
    body1: {
      fontWeight: 400,
      fontSize: 16,
      color: '#3B3934',
      lineHeight: 1.75
    },
    body2: {
      fontWeight: 700,
      fontSize: 16,
      color: '#3B3934',
      lineHeight: 1.75
    },
    button: {
      fontWeight: 700
    }
  },
  overrides: {
    MuiExpansionPanel: {
      root: {
        borderRadius: 4,
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 16,
        marginBottom: 16,
        '&:before': {
          display: 'none'
        },
        '&.white-info': {
          color: 'rgba(255, 255, 255, 1)'
        },
        '&.green-info': {
          borderLeft: '4px solid rgba(77, 184, 72, 0.87)'
        },
        '&.red-info': {
          borderLeft: '4px solid rgba(233, 0, 34, 0.87)'
        },
        '&.orange-info': {
          borderLeft: '4px solid rgba(242, 153, 74, 0.87)'
        },
        '&.blue-info': {
          borderLeft: '4px solid rgba(0, 145, 224, 0.87)'
        }
      }
    },
    MuiTypography: {
      root: {
        '&.white-info': {
          color: 'rgba(255, 255, 255, 1)'
        },
        '&.green-info': {
          color: 'rgba(77, 184, 72, 0.87)'
        },
        '&.red-info': {
          color: 'rgba(233, 0, 34, 0.87)'
        },
        '&.orange-info': {
          color: 'rgba(242, 153, 74, 0.87)'
        },
        '&.blue-info': {
          color: 'rgba(0, 145, 224, 0.87)'
        }
      }
    },
    MuiSvgIcon: {
      root: {
        '&.white-info': {
          color: 'rgba(255, 255, 255, 1)'
        },
        '&.green-info': {
          color: 'rgba(77, 184, 72, 0.87)'
        },
        '&.red-info': {
          color: 'rgba(233, 0, 34, 0.87)'
        },
        '&.orange-info': {
          color: 'rgba(242, 153, 74, 0.87)'
        },
        '&.blue-info': {
          color: 'rgba(0, 145, 224, 0.87)'
        }
      }
    },
    MuiIcon: {
      root: {
        '&.white-info': {
          color: 'rgba(255, 255, 255, 1)'
        },
        '&.green-info': {
          color: 'rgba(77, 184, 72, 0.87)'
        },
        '&.red-info': {
          color: 'rgba(233, 0, 34, 0.87)'
        },
        '&.orange-info': {
          color: 'rgba(242, 153, 74, 0.87)'
        },
        '&.blue-info': {
          color: 'rgba(0, 145, 224, 0.87)'
        }
      }
    }
  }
}
