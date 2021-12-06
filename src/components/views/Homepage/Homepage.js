import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from '../../../redux/usersRedux';
import { getAll } from '../../../redux/postsRedux';

import clsx from 'clsx';

import styles from './Homepage.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    margin: 10,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
    cursor: 'context-menu',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const Component = ({className, posts, users}) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, styles.root)}>
      <h2>Homepage</h2>
      {posts.data.map(post => {
        return (
          <Grid key={post.id} className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={post.picture} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        {post.title}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {post.content}
                      </Typography>
                      <Typography variant="body2">
                        <Button component={Link} to={`/post/${post.id}`} color="inherit">View advert</Button>
                      </Typography>
                      {users.isLogged ?
                        <Typography variant="body2">
                          <Button component={Link} to="/post/add" color="inherit">Add new advert</Button>
                        </Typography>
                        :
                        ''
                      }
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">${post.price}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        );
      })}
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.object,
  users: PropTypes.object,
};

const mapStateToProps = state => ({
  users: getUsers(state),
  posts: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps, /* mapDispatchToProps */)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
