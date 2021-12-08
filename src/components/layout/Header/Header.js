import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getUsers } from '../../../redux/usersRedux.js';

import styles from './Header.module.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Component = ({className, users}) => (
  <div className={clsx(className, styles.root)}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={styles.title}>
          <Button component={Link} to="/" color="inherit">Bulletin Board</Button>
        </Typography>
        {users.isLogged ?
          <Typography variant="h6">
            <Button component={Link} to="/" color="inherit">My adverts</Button>
            <Button component={Link} to="/post/add" color="inherit">Add new advert</Button>
            <Button component={Link} to="/logout" color="inherit">Logout</Button>
          </Typography>
          :
          <Button component={Link} to="/login" color="inherit">Login</Button>
        }
      </Toolbar>
    </AppBar>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  users: PropTypes.object,
};

const mapStateToProps = state => ({
  users: getUsers(state),
});

/* const mapDispatchToProps = dispatch => ({
  someAction: arg => dispatch(reduxActionCreator(arg)),
}); */

const Container = connect(mapStateToProps, /* mapDispatchToProps */)(Component);

export {
  //Component as Header,
  Container as Header,
  Component as HeaderComponent,
};
