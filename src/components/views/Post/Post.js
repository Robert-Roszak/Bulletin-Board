import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOnePost } from '../../../redux/postsRedux';
import { getUsers } from '../../../redux/usersRedux';

import styles from './Post.module.scss';
import { Typography, Grid, Button} from '@material-ui/core';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import { Link } from 'react-router-dom';

const Component = ({className, post, users }) => {

  return (
    <div className={clsx(className, styles.root)}>
      <Grid container spacing={3} className={styles.postContainer}>
        <Grid item xs={12} sm={4} md={4} className={styles.imageWrapper}>
          {
            post.picture ?
              <img className={styles.image} src={post.picture} alt='img' />
              :
              <img className={styles.image} src="https://kwiaciarniaegzotyka.pl/wp-content/uploads/2018/10/kisspng-video-on-demand-retail-website-simple-no-png-5ab1349e1338a3.1123358815215627820787.png" alt='no_picture' />
          }
        </Grid>
        <Grid item xs={12} sm={5} md={5} className={styles.content}>
          <Grid container>
            <Typography variant="h4">
              {post.title} {post.price ? `- $${post.price}` : ''}
            </Typography>
            <Typography variant="body1">
              {post.content}
            </Typography>
          </Grid>
          <Grid container direction="column" className={styles.contact}>
            <Typography variant="h6">
              Contact information
            </Typography>
            {
              post.authorEmail ?
                <Typography variant="body1" className={styles.iconWrapper}>
                  <EmailRoundedIcon color="info" className={styles.icon} /> email: {post.authorEmail}
                </Typography>
                :
                ''
            }
            {
              post.phoneNumber ?
                <Typography variant="body1" className={styles.iconWrapper}>
                  <PhoneAndroidRoundedIcon color="info" className={styles.icon} /> phone: {post.phoneNumber}
                </Typography>
                :
                ''
            }
            {
              post.adLocation ?
                <Typography variant="body1" className={styles.iconWrapper}>
                  <LocationCityRoundedIcon color="info" className={styles.icon} /> location: {post.adLocation}
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
              Date published {post.datePublished}
            </Typography>
            {
              post.dateUpdated ?
                <Typography variant="body1">
                  Date updated {post.dateUpdated}
                </Typography>
                :
                ''
            }
            {users.isAdmin || users.user === post.authorEmail ?
              <Typography variant="body2">
                <Button component={Link} to="/post/add" color="inherit" variant="outlined">Edit advert</Button>
              </Typography>
              :
              ''
            }
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  match: PropTypes.any,
  post: PropTypes.object,
  users: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  users: getUsers(state),
  post: getOnePost(state, props.match.params.id),
});

/* const mapDispatchToProps = (dispatch, props) => ({
  fetchOnePost: () => dispatch(fetchPost(props.match.params.id)),
}); */

const Container = connect(mapStateToProps/* , mapDispatchToProps */)(Component);

export {
  //Component as Post,
  Container as Post,
  Component as PostComponent,
};
