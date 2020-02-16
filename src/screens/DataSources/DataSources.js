import React from 'react';
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


// const styles = theme => ({
//   appBarSpacer: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing.unit * 3,
//     height: '100vh',
//     overflow: 'auto'
//   },
//   tableContainer: {
//     height: 320,
//   },
//   fab: {
//     position: 'absolute',
//     bottom: theme.spacing.unit * 2,
//     right: theme.spacing.unit * 2,
//   }
// })


export default function SystemState() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  
  return (
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
            <SimpleTable/>
          {/* </Paper> */}
        </Grid>
    
      </Grid>

    </div>
  );
}

