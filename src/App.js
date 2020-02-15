import React, { Component } from "react"
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './reducers'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import PortalAppBar from './components/PortalAppBar'
import PortalDrawer from './components/PortalDrawer'
import Home from './screens/Home'
import Interfaces from "./screens/Interfaces";
import SystemState from './screens/SystemState'

const styles = theme => ({
  root: {
    display: 'flex'
  }
})

class App extends Component {
  
  state = {
    open: true,
    appBarTitle: ''
  }

  handleDrawerOpen = () => {
    console.log("HANDLE_DRAWER_OPEN")
    this.setState({ open: true })
  };

  handleDrawerClose = () => {
    console.log("HANDLE_DRAWER_CLOSE")
    this.setState({ open: false })
  };

  setAppBarTitle = (appBarTitle) => {
    this.setState({ appBarTitle: appBarTitle })
  }

  handleListItemClick = (appBarTitle) => {
    console.log('HANDLE_LIST_ITEM_CLICK' + appBarTitle)
    this.setState({ appBarTitle: appBarTitle })
  }

  handleAppBarIconClick = () => {
    console.log('HANDLE_APPBAR_ICON_CLICK')
  }

  render() {
    const { classes } = this.props
    return (
      <Provider store={ store }>
        <Router>
          <div className={ classes.root }>
          <CssBaseline />
          <PortalAppBar
            open={ this.state.open }
            appBarTitle={ this.state.appBarTitle }
            handleDrawerOpen={ this.handleDrawerOpen }
            handleAppBarIconClick={ this.handleAppBarIconClick }
          />
          <PortalDrawer
            open={ this.state.open }
            handleDrawerClose={ this.handleDrawerClose }
            handleListItemClick={ this.handleListItemClick }
          />
          <div className="app">
            <Switch>
              <Route exact path="/" component={ Home }/>
              <Route exact path="/home" component={ Home }/>
              <Route exact path="/interfaces" component={ Interfaces} />
              <Route exact path="/system-state" component={ SystemState} />
            </Switch>
          </div>
        </div>
        </Router>
      </Provider>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)