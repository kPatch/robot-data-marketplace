import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import SimpleTable from '../../components/SimpleTable'
import Switch from '@material-ui/core/Switch';
import { amber, cyan, blue, blueGrey, lightBlue, pink } from '@material-ui/core/colors'
import { CssBaseline } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';
import { ethers } from 'ethers'

import { withRouter } from "react-router"


let provider
let signer
let utils
let address
let showVideo;
let tokenAddress = "0x38445bc9B91abA03D90316f1038eb873acBD40F2"
let tokenABI = [
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
let tokenContract;

let roboMarketAddress = "0x8daf13cE2D80086377197f542DbF1c077CD16a9e"
let roboMarketABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "buy1",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "permissions1",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "price1",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "roboCoin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "validatePermission1",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
let roboMarketContract




const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const styles = theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto'
  },
  tableContainer: {
    height: 320,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }
})

class DataSources extends Component {
  constructor(props) {
    super(props)

    // this.handleClose = this.handleClose.bind(this)
    // this.showSnackBar = this.showSnackBar.bind(this)
    this.approve = this.approve.bind(this);
  }

  handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  componentDidMount = () => {
    this.initEthers()
  }


  initEthers=()=> {

    provider = new ethers.providers.Web3Provider(web3.currentProvider);
    var self=this;
    provider.listAccounts().then(function(result){
      signer = provider.getSigner(result[0])
      console.log(signer)

      address = signer._address;
      console.log(address)
      tokenContract = new ethers.Contract(tokenAddress,tokenABI,signer)
      roboMarketContract = new ethers.Contract(roboMarketAddress,roboMarketABI,signer)
      console.log(roboMarketContract)
      roboMarketContract.validatePermission1().then(function(result){
        console.log("working to validate")
        console.log(result)
        if(result==true){
          showVideo="visible";
          console.log(self)
          self.setState({showVideo:"visible"})
          document.getElementById("statusLabel").innerHTML="Status: Access Granted"
        } else if(result==false){
          showVideo="hidden"
          self.setState({showVideo:"hidden"})
          document.getElementById("statusLabel").innerHTML="Status: Access Denied"
        }

      })
    })
  }

      approve = () => {
        let amount = ethers.utils.parseUnits("1000",8)
      	tokenContract.approve(roboMarketAddress,amount).then(function(result){
          console.log(result)
          if(this.props.history.location.pathname != 'home') {
            console.log('HOME')
  
            console.log(JSON.stringify(this.props.history))
            this.props.history.push('home')
            // this.props.handleListItemClick(listItem.text) 
          }
        })
      }

      buyData=()=>{
        roboMarketContract.buy1().then(function(result){
          console.log(result)
        })
      }


      checkPermission=()=>{
        roboMarketContract.validatePermission1().then(function(result){
          console.log("working to validate")
          console.log(result)
          if(result==true){
            showVideo="visible";

            document.getElementById("statusLabel").innerHTML="Status: Access Granted"
          } else if(result==false){
            showVideo="hidden"
            document.getElementById("statusLabel").innerHTML="Status: Access Denied"
          }

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

  
    render() {
      const { classes } = this.props
      return(
      <div className={classes.content}>
        <div className={ classes.appBarSpacer } />
        <Grid container spacing={0}>
          {/* <Grid item xs={12}>
            <Paper className={classes.paper}><SimpleTable/></Paper>
          </Grid> */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            {/* <Paper className={classes.paper}> */}
              <CssBaseline/>
              {/* <Typography variant="h7" component="h7">
                Left Arm
              </Typography> */}
              {/* <Switch
                checked={state.checkedB}
                onChange={handleChange('checkedB')}
                value="checkedB"
                color="secondary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              /> */}
              <SimpleTable onClick={this.approve}/>
            {/* </Paper> */}
          </Grid>
      
        </Grid>

      </div>)
    }
}

DataSources.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DataSources)
