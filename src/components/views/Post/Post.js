import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOnePost, fetchOnePostFromAPI } from '../../../redux/postsRedux';
import { getUsers } from '../../../redux/usersRedux';

import styles from './Post.module.scss';
import { Typography, Grid, Button} from '@material-ui/core';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import { Link } from 'react-router-dom';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const Component = ({className, post, users, fetchPost }) => {
  useEffect(() => {
    fetchPost();
  },[fetchPost]);

  if (post) {
    return (
      <div className={clsx(className, styles.root)}>
        <Grid container spacing={3} className={styles.postContainer}>
          <Grid item xs={12} sm={4} md={4} className={styles.imageWrapper}>
            {
              post.photo ?
                <img className={styles.image} src={post.photo} alt='img' />
                :
                <Typography variant="h6">No picture</Typography>
            }
          </Grid>
          <Grid item xs={12} sm={5} md={5} className={styles.content}>
            <Grid container>
              <Typography variant="h4">
                {post.title} {post.price ? `- $${post.price}` : ''}
              </Typography>
              <Typography variant="body1">
                {post.text}
              </Typography>
            </Grid>
            <Grid container direction="column" className={styles.contact}>
              <Typography variant="h6">
                Contact information
              </Typography>
              {
                post.author ?
                  <Typography variant="body1" className={styles.iconWrapper}>
                    <EmailRoundedIcon color="info" className={styles.icon} /> email: {post.author}
                  </Typography>
                  :
                  ''
              }
              {
                post.phone ?
                  <Typography variant="body1" className={styles.iconWrapper}>
                    <PhoneAndroidRoundedIcon color="info" className={styles.icon} /> phone: {post.phone}
                  </Typography>
                  :
                  ''
              }
              {
                post.location ?
                  <Typography variant="body1" className={styles.iconWrapper}>
                    <LocationCityRoundedIcon color="info" className={styles.icon} /> location: {post.location}
                  </Typography>
                  :
                  ''
              }
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={3} md={3} className={styles.status}>
            <Grid>
              <Typography variant="body1">
                Status: {post.status}
              </Typography>
              <Typography variant="body1">
                Date published {post.created}
              </Typography>
              {
                post.updated ?
                  <Typography variant="body1">
                    Date updated {post.updated}
                  </Typography>
                  :
                  ''
              }
              {users.isAdmin || (users.isLogged && users.user === post.author) ?
                <Typography variant="body2">
                  <Button component={Link} to={`/post/${post._id}/edit`} color="primary" variant="contained" size="small" fullWidth startIcon={<EditRoundedIcon />}>Edit advert</Button>
                </Typography>
                :
                ''
              }
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
  else {
    return(
      <h1>Loading</h1>
    );
  }

};


Component.propTypes = {
  className: PropTypes.string,
  match: PropTypes.any,
  post: PropTypes.object,
  users: PropTypes.object,
  fetchPost: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  users: getUsers(state),
  post: getOnePost(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchPost: () => dispatch(fetchOnePostFromAPI(props.match.params.id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Post,
  Container as Post,
  Component as PostComponent,
};
