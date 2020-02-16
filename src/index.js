import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { amber, cyan, blue, blueGrey, lightBlue, pink } from '@material-ui/core/colors'
import Button from '@material-ui/core/Button';

import App from './App'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    // primary: blue,
    primary: amber,
    secondary: pink,
  },
  typography: {
    useNextVariants: true
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={ theme }>
    <App />
  </MuiThemeProvider>,
    document.getElementById('root'))
