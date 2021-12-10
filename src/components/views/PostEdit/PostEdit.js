import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOnePost } from '../../../redux/postsRedux';
import { getUsers } from '../../../redux/usersRedux';

import styles from './PostEdit.module.scss';
import { Typography, Grid, Button} from '@material-ui/core';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import { Link } from 'react-router-dom';
import SaveAsRoundedIcon from '@mui/icons-material/SaveAsRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const Component = ({className, post }) => {

  const Input = styled('input')({
    display: 'none',
  });

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className={clsx(className, styles.root)}>
      <Grid container spacing={3} className={styles.postContainer}>
        <Grid item xs={12} sm={4} md={4} className={styles.imageWrapper}>
          {
            post.picture ?
              <img className={styles.image} src={post.picture} alt='img' />
              :
              <img className={styles.image} src="https://kwiaciarniaegzotyka.pl/wp-content/uploads/2018/10/kisspng-video-on-demand-retail-website-simple-no-png-5ab1349e1338a3.1123358815215627820787.png" alt='no_picture' />
          }
          <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" />
            <Button variant="contained" component="span" color="primary" className={styles.uploadButton}>
              Upload photo
            </Button>
          </label>
        </Grid>
        <Grid item xs={12} sm={5} md={5}>
          <Grid container className={styles.contentOne}>
            <TextField
              required
              id="outlined-title"
              label="Title"
              defaultValue={post.title}
            />
            <TextField
              id="outlined-number"
              label="Price"
              type="number"
              defaultValue={post.price}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid container>
            <TextField
              className={styles.contentTwo}
              id="outlined-multiline-content"
              label="Content"
              required
              multiline
              maxRows={4}
              defaultValue={post.content}
            />
          </Grid>
          <Grid container direction="column" className={styles.contact}>
            <Typography variant="h6">
              Contact information
            </Typography>
            <Typography variant="body1" className={styles.iconWrapper}>
              <EmailRoundedIcon color="info" className={styles.icon} />
              <TextField
                className={styles.contactText}
                required
                id="outlined-email"
                label="e-mail"
                defaultValue={post.authorEmail}
              />
            </Typography>
            <Typography variant="body1" className={styles.iconWrapper}>
              <PhoneAndroidRoundedIcon color="info" className={styles.icon} />
              <TextField
                className={styles.contactText}
                id="outlined-phone"
                label="Phone number"
                defaultValue={post.phoneNumber}
              />
            </Typography>
            <Typography variant="body1" className={styles.iconWrapper}>
              <LocationCityRoundedIcon color="info" className={styles.icon} />
              <TextField
                className={styles.contactText}
                id="outlined-phone"
                label="Location"
                defaultValue={post.adLocation}
              />
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={3} md={3} className={styles.status}>
          <Grid>
            <Typography variant="body1">
              Status: {post.status}
            </Typography>
            <Typography gutterBottom variant="body2">
              <Button color="primary" variant="contained" size="small" fullWidth startIcon={<SaveAsRoundedIcon />}>Save as draft</Button>
            </Typography>
            <Typography gutterBottom variant="body2">
              <Button component={Link} to={`/post/${post.id}`} color="primary" variant="contained" size="small" fullWidth startIcon={<SaveRoundedIcon />}>Publish</Button>
            </Typography>
            <Typography variant="body2">
              <Button component={Link} to={`/`} color="primary" variant="contained" size="small" fullWidth startIcon={<DeleteForeverRoundedIcon />}>Remove advert</Button>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
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
  //Component as PostEdit,
  Container as PostEdit,
  Component as PostEditComponent,
};
