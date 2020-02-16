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
import { ethers } from 'ethers'
import DataSources from "./screens/DataSources"

const styles = theme => ({
  root: {
    display: 'flex'
  }
})

class App extends Component {


componentDidMount(){
  this.initEthers()

  //this.sendTX()
}



  state = {
    open: true,
    appBarTitle: '',
    signer: "",
    address: "",
    contractABI: "",
    contractAddress: "",
    contract: "",
  }
  initEthers=()=> {
  let signer
  let address
  let provider = new ethers.providers.Web3Provider(web3.currentProvider);

  provider.listAccounts().then(function(result){
    signer = provider.getSigner(result[0])
    console.log(signer)
    this.setState({ signer: signer })

    address = signer._address;
    console.log(address)
    this.setState({ address: address })
    connectToContract()
  })
}

connectToContract=()=> {
  //contract = new ethers.Contract(tokenAddress,tokenABI,signer);
  console.log(this.state.signer)
}

approve = () => {
  // contract.approve(contractAddress,amount).then(function(result){
  //   console.log(result)
  // })
  
}

buyData=()=>{
  contract.buy1().then(function(result){
    console.log(result);
  })
}


checkPermission=()=>{
  return contract.validatePermission().then(function(result){
    console.log(result)
  })
}

sendTx=()=> {
  let tx = {
    to: "0x88a5c2d9919e46f883eb62f7b8dd9d0cc45bc290",
    // ... or supports ENS names
    // to: "ricmoo.firefly.eth",

    // We must pass in the amount as wei (1 ether = 1e18 wei), so we
    // use this convenience function to convert ether to wei.
    value: ethers.utils.parseEther('0.001')
};
let signer = this.state.signer
let sendPromise = signer.sendTransaction(tx);

sendPromise.then((tx) => {
    console.log(tx);
    // {
    //    // All transaction fields will be present
    //    "nonce", "gasLimit", "pasPrice", "to", "value", "data",
    //    "from", "hash", "r", "s", "v"
    // }
});
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
              <Route exact path="/system-state" component={ DataSources} />
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
