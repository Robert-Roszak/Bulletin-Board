import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

//import { connect } from 'react-redux';

import styles from './PostAdd.module.scss';
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

const Component = ({className }) => {

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
            />
            <TextField
              id="outlined-number"
              label="Price"
              type="number"
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
              />
            </Typography>
            <Typography variant="body1" className={styles.iconWrapper}>
              <PhoneAndroidRoundedIcon color="info" className={styles.icon} />
              <TextField
                className={styles.contactText}
                id="outlined-phone"
                label="Phone number"
              />
            </Typography>
            <Typography variant="body1" className={styles.iconWrapper}>
              <LocationCityRoundedIcon color="info" className={styles.icon} />
              <TextField
                className={styles.contactText}
                id="outlined-phone"
                label="Location"
              />
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={3} md={3} className={styles.status}>
          <Grid>
            <Typography variant="body1">
              Status: draft
            </Typography>
            <Typography gutterBottom variant="body2">
              <Button color="primary" variant="contained" size="small" fullWidth startIcon={<SaveAsRoundedIcon />}>Save as draft</Button>
            </Typography>
            <Typography gutterBottom variant="body2">
              <Button component={Link} to={`/post/`} color="primary" variant="contained" size="small" fullWidth startIcon={<SaveRoundedIcon />}>Publish</Button>
            </Typography>
            <Typography variant="body2">
              <Button component={Link} to={`/`} color="primary" variant="contained" size="small" fullWidth startIcon={<DeleteForeverRoundedIcon />}>Cancel</Button>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

/* const mapStateToProps = (state, props) => ({
  users: getUsers(state),
  post: getOnePost(state, props.match.params.id),
}); */

/* const mapDispatchToProps = (dispatch, props) => ({
  fetchOnePost: () => dispatch(fetchPost(props.match.params.id)),
}); */

//const Container = connect(mapStateToProps/* , mapDispatchToProps */)(Component);

export {
  Component as PostAdd,
  //Container as PostAdd,
  Component as PostAddComponent,
};
