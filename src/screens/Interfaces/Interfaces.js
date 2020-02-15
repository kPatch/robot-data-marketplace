import React, { Component }     from 'react'
import PropTypes                from 'prop-types'
import classNames               from 'classnames'
import Grid                     from '@material-ui/core/Grid'
import { withStyles }           from '@material-ui/core/styles'
import { withRouter }           from 'react-router'
import { connect }              from 'react-redux'
import InterfaceCard            from './InterfaceCard'

const styles = theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto'
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  actions: {
    display: 'flex',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
})

class Interfaces extends Component {
  render() {
    const { classes } = this.props

    return (
      <main className={ classes.content }>
        <div className={ classes.appBarSpacer } />
        <div className={ classNames(classes.layout, classes.cardGrid) }>
          <Grid container spacing={ 8 }>
            {this.props.interfaces.interfaceList.map(card => (
              <InterfaceCard
                card={ card }
                key={ card.interfaceId }
                interfaceCardTitle={ card.interfaceName }
                interfaceCardContent={ card.interfaceDescription }
                interfaceId={ card.interfaceId }
              />
            ))}
          </Grid>
        </div>
      </main>
    )
  }
}

Interfaces.propTypes = {
  classes: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  console.log('STATE:: ' + JSON.stringify(state))
  return { 
    interfaces:     state.interfaces,
  }
}

export default withRouter(
  connect(mapStateToProps, { })( withStyles(styles)(Interfaces))
)