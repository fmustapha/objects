import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

const  ButtonComponent = (props) =>  {
  
  return (
    <div>
      <Fab color="primary" aria-label="Add" >
        {props.name="Add"&&<AddIcon />}
        {props.name="Delete"&&<DeleteIcon />}
        {props.name="Edit"&&<Icon>edit_icon</Icon>}
      </Fab>
    </div>
  );
}

export default ButtonComponent;
