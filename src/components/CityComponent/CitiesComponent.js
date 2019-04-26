import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, longitude, latitude, hemisphere, population ) {
  id += 1;
  return { id, name, longitude, latitude, hemisphere, population };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// ];

function CitiesComponent(props) {
  const { classes, header, cities, community } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
          {header.map((data, index) => <TableCell key={index} align="right">{data}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {cities && cities.map((city, idx) => (
            <TableRow key={idx}>
              <TableCell component="th" scope="row">
                {city.name}
              </TableCell>
              <TableCell align="right">{city.longitude}</TableCell>
              <TableCell align="right">{city.latitude}</TableCell>
              <TableCell align="right">{city.howBig()}</TableCell>
              <TableCell align="right">{community.whichSphere(city)}</TableCell>
              <TableCell align="right">{city.population}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

CitiesComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CitiesComponent);
