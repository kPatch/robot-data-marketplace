import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // marginTop: theme.spacing(1),
    overflowX: 'auto',
  },
  table: {
    // minWidth: 650,
    padding: 'none'
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Shldr Pitch', 159, 6.0, 24, 4.0),
  createData('Shldr Rolls', 237, 9.0, 37, 4.3),
  createData('Arm Pitch', 262, 16.0, 24, 6.0),
  createData('Elbow Pitch', 305, 3.7, 67, 4.3),
  createData('Wrist Roll', 356, 16.0, 49, 3.9),
  createData('Wrist Pitch', 356, 16.0, 49, 3.9),
  createData('Wrist Yaw', 356, 16.0, 49, 3.9),
];

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
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Joint Name</TableCell>
            <TableCell align="center">Temp.</TableCell>
            <TableCell align="center">Curr. Pos.</TableCell>
            <TableCell align="center">Goal Pos.</TableCell>
            <TableCell align="center">Err.</TableCell>
            <TableCell align="center">Torq.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
              <TableCell align="center">
                <Switch
                checked={state.checkedB}
                onChange={handleChange('checkedB')}
                value="checkedB"
                color="secondary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default SimpleTable;