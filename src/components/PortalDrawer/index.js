import React, { Component } from 'react'
import { withRouter } from "react-router"
import { compose } from 'redux'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NavList from './NavList'

const drawerWidth = 240

const styles = theme => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9
    }
  }
})

class PortalDrawer extends Component {
  handleListItemClick = (listItem) => {
    console.log('HANDLE_LIST_ITEM_CLICK::::' + listItem.path)
   
    if(this.props.history.location.pathname != listItem.path) {
      console.log(JSON.stringify(this.props.history))
      this.props.history.push(listItem.path)
      this.props.handleListItemClick(listItem.text) 
    }
  }

  render() {
    const { classes } = this.props
    
    return(
      <Drawer
        variant="permanent"
        classes={ {
          paper: classNames(classes.drawerPaper, !this.props.open && classes.drawerPaperClose)
        } }
        open={ this.props.open }
      >
        <div className={classes.toolbarIcon}>
          <Typography variant="h4" gutterBottom component="h3">
            Robot Marketplace
          </Typography>
          <IconButton onClick={ this.props.handleDrawerClose }>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <NavList
          mainListItems={ null }
          secondaryListItems={ null }
          handleListItemClick={ this.handleListItemClick }
        />
      </Drawer>
    )
  }
}

PortalDrawer.propTypes = {
  open:               PropTypes.bool.isRequired,
  classes:            PropTypes.object.isRequired,
  handleDrawerClose:  PropTypes.func.isRequired
}

export default compose(withRouter, withStyles(styles))(PortalDrawer)