import _ from 'lodash'
import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import BarChartIcon from '@material-ui/icons/BarChart'
import LayersIcon from '@material-ui/icons/Layers'
import AssignmentIcon from '@material-ui/icons/Assignment'
import HomeIcon from '@material-ui/icons/Home'
import DeleteIcon from '@material-ui/icons/Delete'
import LanguageIcon from '@material-ui/icons/Language'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import Accessibility from '@material-ui/icons/Accessibility'
import Divider from '@material-ui/core/Divider'

const itemList = {
  DashboardIcon:  { Component: DashboardIcon,   text: 'Assets',       path: '/assets'},
  Divider:        { Component: Divider,         text: null,           path: null },
  HomeIcon:       { Component: HomeIcon,        text: 'Home',         path: '/home' },
  Interfaces:     { Component: Accessibility,   text: 'Robots',       path: '/system-state'},
  PeopleIcon:     { Component: PeopleIcon,      text: 'Operators',        path: '/operators'},
  LanguageIcon:   { Component: LanguageIcon,    text: 'Networks',     path: '/networks'},
  LayersIcon:     { Component: LayersIcon,      text: 'Integrations', path: '/integrations'},
  // BarChartIcon:   { Component: BarChartIcon,    text: 'Analytics',    path: '/analytics' },
  // DeleteIcon:     { Component: DeleteIcon,      text: 'Trash',        path: '/trash' }
}

class NavList extends Component {
  constructor(props) {
    super(props)
    this.state ={
      selected: '/appStore'
    }
  }

  handleListItemClick(listItem) {
    this.setState({
      selected: listItem.path
    })
    this.props.handleListItemClick(listItem) 
  }

  renderListItems(listItems) {
    let retComponent
    return _.map(listItems, listItem => {
      const { Component, text, path } = listItem
      if(text) {
        retComponent = (
          <ListItem button 
            selected={ this.state.selected == path}
            key={ path } 
            onClick={() => { this.handleListItemClick(listItem) }}>
            <ListItemIcon>
              <Component/>
            </ListItemIcon>
            <ListItemText primary={ text } />
          </ListItem>
        )
      } else {
        retComponent = (<Component key={ text }/>)
      }
      return retComponent
    })
  }

  render() {
    return(
      <div>
        { this.renderListItems(itemList) }
        <Divider />
        <ListSubheader inset>Saved items</ListSubheader>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Last month" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Year-end" />
        </ListItem>
      </div>
    )
  }
}

export default NavList