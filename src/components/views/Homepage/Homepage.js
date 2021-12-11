import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from '../../../redux/usersRedux';
import { getAllPublished, fetchPublished } from '../../../redux/postsRedux';

import clsx from 'clsx';

import styles from './Homepage.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

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

const Component = ({className, posts, users, fetchPublishedPosts}) => {
  const classes = useStyles();

  useEffect(() =>{
    fetchPublishedPosts();
  });

  return (
    <div className={clsx(className, styles.root)}>
      {posts.map(post => {
        return (
          <Grid key={post._id} className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                {post.photo ?
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="img" src={post.photo} />
                    </ButtonBase>
                  </Grid>
                  :
                  ''
                }
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        {post.title}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {post.text}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" gutterBottom>
                        <Button component={Link} to={`/post/${post._id}`} color="primary" variant="contained" size="small" fullWidth startIcon={<OpenInNewRoundedIcon />}>View advert</Button>
                      </Typography>
                      {users.isAdmin || (users.isLogged && users.user === post.author) ?
                        <Typography variant="body2">
                          <Button component={Link} to={`/post/${post._id}/edit`} color="primary" variant="contained" size="small" fullWidth startIcon={<EditRoundedIcon />}>Edit advert</Button>
                        </Typography>
                        :
                        ''
                      }
                    </Grid>
                  </Grid>
                  {post.price ?
                    <Grid item>
                      <Typography variant="subtitle1">${post.price}</Typography>
                    </Grid>
                    :
                    ''
                  }
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
  posts: PropTypes.array,
  users: PropTypes.object,
  fetchPublishedPosts: PropTypes.func,
};

const mapStateToProps = state => ({
  users: getUsers(state),
  posts: getAllPublished(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPublishedPosts: () => dispatch(fetchPublished()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);


export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
