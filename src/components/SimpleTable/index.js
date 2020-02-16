import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // marginTop: theme.spacing(1),
    overflowX: 'auto',
  },
  table: {
    minWidth: 1000,
    padding: 'none'
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function createDataRows(location, source, type, realtime, description, available, price, enabled) {
  return { location, source, type, realtime, description, available, price, enabled};
}

const rows = [
  // createData('Shldr Pitch', 159, 6.0, 24, 4.0),
  // createData('Shldr Rolls', 237, 9.0, 37, 4.3),
  // createData('Arm Pitch', 262, 16.0, 24, 6.0),
  // createData('Elbow Pitch', 305, 3.7, 67, 4.3),
  // createData('Wrist Roll', 356, 16.0, 49, 3.9),
  // createData('Wrist Pitch', 356, 16.0, 49, 3.9),
  // createData('Wrist Yaw', 356, 16.0, 49, 3.9),
  createDataRows('ETHDenver', 'Mobile Robot', 'Raw', 'Yes', 'Temperature, Vision, Foot traffic data\n. Real-time. Access for 10 minutes', 'Yes', 0.02, true),
  createDataRows('ETHDenver', 'Drone / Quad-copter', 'Raw', 'No', 'Static Temperature', 'No', 0.005, false),
  createDataRows('ETHDenver', 'Berkeley Mote - 1st Floor', 'Raw', 'Yes', 'Temperature data from IoT device', 'Yes', 0.001, false),
  createDataRows('ETHDenver', 'Berkeley Mote - 2nd Floor', 'Raw', 'Yes', 'Temperature data from IoT device', 'Yes', 0.001, false),
  createDataRows('ETHDenver', 'Berkeley Mote - 3rd Floor', 'Raw', 'Yes', 'Temperature data from IoT device', 'Yes', 0.001, false),
]

function SimpleTable() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} size="large">
        <TableHead>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell align="center">Data Source</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Realtime</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Available</TableCell>
            <TableCell align="center">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.location}>
              <TableCell component="th" scope="row">
                {row.location}
              </TableCell>
              <TableCell align="center">{row.source}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.realtime}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.available}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">
                {/* <Switch
                checked={state.checkedB}
                onChange={handleChange('checkedB')}
                value="checkedB"
                color="secondary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
                /> */}
                <Button variant="contained" color="secondary" disabled={!row.enabled}>Purchase</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default SimpleTable;