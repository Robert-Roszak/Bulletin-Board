import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { addPostRequest } from '../../../redux/postsRedux';

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
import ImageUploader from 'react-images-upload';

class Component extends React.Component {
  state = {
    advert: {
      title: '',
      text: '',
      author: '',
      photo: null,
      price: null,
      phone: '',
      location: '',
    },
    isError: false,
  };

  updateTextField = ({ target }) => {
    const { advert } = this.state;
    const { value, name } = target;

    this.setState({ advert: { ...advert, [name]: value }});
  };

  updateNumberField = ({ target }) => {
    const { advert } = this.state;
    const { value, name } = target;

    this.setState({ advert: { ...advert, [name]: parseInt(value) }});
  };


  setPhoto = (files) => {
    const { advert } = this.state;

    if(files) this.setState({ advert: { ...advert, photo: files[0].name }});
    else this.setState({ advert: { ...advert, photo: null }});
  }

  submitForm = async (e) => {
    e.preventDefault();
    const { advert } = this.state;
    const { addPost } = this.props;

    if (advert.title && advert.text && advert.author) {
      addPost(advert);
      this.setState({
        advert: {
          title: '',
          text: '',
          author: '',
          photo: '',
          price: null,
          phone: '',
          location: '',
        },
        isError: false,
      });
    }
  };

  render() {
    const { updateTextField, updateNumberField, submitForm, setPhoto } = this;
    const { className } = this.props;

    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        autoComplete="off"
        enctype="multipart/form-data"
        onSubmit={submitForm}
        className={clsx(className, styles.root)}>
        <Grid container spacing={3} className={styles.postContainer}>
          <Grid item xs={12} sm={4} md={4} className={styles.imageWrapper}>
            <ImageUploader
              withIcon={true}
              buttonText='Choose image'
              imgExtension={['.jpg', '.gif', '.png', '.gif', 'jpeg']}
              maxFileSize={5242880}
              withPreview={true}
              onChange={setPhoto}
              singleImage={true}
            />
          </Grid>
          <Grid item xs={12} sm={5} md={5}>
            <Grid container className={styles.contentOne}>
              <TextField
                required
                id="outlined-title"
                label="Title"
                name="title"
                onChange={updateTextField}
              />
              <TextField
                id="outlined-number"
                label="Price"
                type="number"
                name="price"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={updateNumberField}
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
                name="text"
                onChange={updateTextField}
              />
            </Grid>
            <Grid container direction="column" className={styles.contact}>
              <Typography variant="h6">
                Contact information
              </Typography>
              <Grid className={styles.iconWrapper}>
                <EmailRoundedIcon color="info" className={styles.icon} />
                <TextField
                  className={styles.contactText}
                  required
                  id="outlined-email"
                  label="e-mail"
                  type="email"
                  name="author"
                  onChange={updateTextField}
                />
              </Grid>
              <Grid className={styles.iconWrapper}>
                <PhoneAndroidRoundedIcon color="info" className={styles.icon} />
                <TextField
                  className={styles.contactText}
                  id="outlined-phone"
                  label="Phone number"
                  name="phone"
                  onChange={updateTextField}
                />
              </Grid>
              <Grid className={styles.iconWrapper}>
                <LocationCityRoundedIcon color="info" className={styles.icon} />
                <TextField
                  className={styles.contactText}
                  id="outlined-phone"
                  label="Location"
                  name="location"
                  onChange={updateTextField}
                />
              </Grid>
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
                {/* <Button component={Link} to={`/post/`} color="primary" type="submit" variant="contained" size="small" fullWidth startIcon={<SaveRoundedIcon />}>Publish</Button> */}
                <Button color="primary" type="submit" variant="contained" size="small" fullWidth startIcon={<SaveRoundedIcon />}>Publish</Button>
              </Typography>
              <Typography variant="body2">
                <Button component={Link} to={`/`} color="primary" variant="contained" size="small" fullWidth startIcon={<DeleteForeverRoundedIcon />}>Cancel</Button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  addPost: PropTypes.func,
};

/* const mapStateToProps = (state, props) => ({
  users: getUsers(state),
  post: getOnePost(state, props.match.params.id),
}); */

const mapDispatchToProps = dispatch => ({
  addPost: (advert) => dispatch(addPostRequest(advert)),
});

const Container = connect(/* mapStateToProps, */null, mapDispatchToProps)(Component);

export {
  //Component as PostAdd,
  Container as PostAdd,
  Component as PostAddComponent,
};
